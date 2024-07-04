import { HistoryContainer, HistoryList, Status } from "./styles";

export function History () {
    return (
        <HistoryContainer>
            <h1>History
            </h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Tarefa
                            </th>
                            <th>
                                Duração
                            </th>
                            <th>
                                Inicio
                            </th>
                            <th>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Tarefas
                            </td>
                            <td>
                                28 minutos
                            </td>
                            <td>
                                há 2 meses
                            </td>
                            <td>
                            <Status statusColor="green">
                           Concluido</Status>  
                            </td>
                       
                        </tr>
                        <tr>
                            <td>
                                Tarefas
                            </td>
                            <td>
                                28 minutos
                            </td>
                            <td>
                                há 2 meses
                            </td>
                            <td>
                            <Status statusColor="yellow">
                            em andamento</Status>  
                            </td>
                        
                        </tr>
                        <tr>
                            <td>
                                Tarefas
                            </td>
                            <td>
                                28 minutos
                            </td>
                            <td>
                                há 2 meses
                            </td>
                            <td>
                            <Status statusColor="red">
                            Cancelado</Status>  
                            </td>
                       
                        </tr>
                        <tr>
                            <td>
                                Tarefas
                            </td>
                            <td>
                                28 minutos
                            </td>
                            <td>
                                há 2 meses
                            </td>
                            <td>
                            <Status statusColor="yellow">
                            em andamento</Status>  
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Tarefas
                            </td>
                            <td>
                                28 minutos
                            </td>
                            <td>
                                há 2 meses
                            </td>
                            <td>
                            <Status statusColor="green">
                            Concluido</Status>  
                            </td>  
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
            </HistoryContainer>
    )
}