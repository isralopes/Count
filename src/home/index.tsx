import { HandPalm, Play } from "phosphor-react";
import { CountdownContainer, CountInput, FormContainer, HomeContainer, Separator, StopButton,
     StartButton, TaskInput } from "./styles";
import { useForm } from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import * as  zod from 'zod'
import { useEffect, useState } from "react";
import { differenceInSeconds} from 'date-fns'

const nerCicleFormSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(5).max(60)

})

interface  Cycle {
    id: string;
    task: string;
    mminutesAmount: number;
    startDate: Date;

}

type CreateFormData = zod.infer<typeof nerCicleFormSchema>

export function Home() {

    const [cycle, setCycle] = useState<Cycle[]>([])
    const [cycleActive, setCycleActive] = useState<string | null>(null)
    const[amautPassed, setAmaultPassed] = useState(0);

    const { register, handleSubmit, watch, reset,formState } = useForm <CreateFormData>({
        resolver: zodResolver(nerCicleFormSchema), 
        defaultValues: {
            minutesAmount: 0,
            task: '',
        }
    })

    
    

    function handlecreate(data: CreateFormData) {

        const id = String(new Date().getTime())
        
        const newcycle: Cycle ={
            id,
            task: data.task,
            mminutesAmount: data.minutesAmount,
            startDate: new Date()
        }
        setCycle((state) => [...state,newcycle ])
        setCycleActive(id)
        reset();

    }
    
    const ActiceC = cycle.find(cycles => cycles.id === cycleActive)


    
    useEffect(() => {

        let interval: number
        if(ActiceC) {
           interval = setInterval(() => {
                setAmaultPassed(differenceInSeconds(new Date(), ActiceC.startDate))
            }, 1000)
        }

    }, [ActiceC])
    
    const totalCycle = ActiceC ? ActiceC.mminutesAmount * 60 : 0
    const currentSecond =  ActiceC ? totalCycle - amautPassed : 0

    const minutesAmaount =  Math.floor(currentSecond / 60)
    const seconddAmaount =  currentSecond % 60


    const minutes = String(minutesAmaount).padStart(2, '0')
    const seconds = String(seconddAmaount).padStart(2, '0')

    useEffect(() => {
        document.title = `${minutes}: ${seconds}`
    }, [minutes, seconds, ActiceC])

    console.log() 

    const task = watch('task')
    const isSubitDisable = !task

    console.log(formState.errors)
    return (
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handlecreate)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task"
                        list="task-suggestions"

                        placeholder="De um nome para seu projeto"
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value=" projeto 1"></option>
                        <option value="projeto 2"></option>
                        <option value="projeto 3"></option>
                        <option value="projeto 4"></option>
                    </datalist>

                    <label htmlFor="minutesAmount">Durante</label>

                    <CountInput type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />


                    <span>Minutos</span>
                </FormContainer>

                <CountdownContainer >
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountdownContainer>
             {ActiceC ? (<StopButton  type="button" >

                    <HandPalm size={24} />
                    Começar
                </StopButton>) : (   <StartButton type="submit" disabled={isSubitDisable}>

                    <Play size={24} />
                    Começar
                </StartButton>)}
            </form>
        </HomeContainer>
    )
}