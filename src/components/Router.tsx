import { Routes,  Route } from 'react-router-dom';
import { Home } from '../home';
import { History } from '../pages/history';
import { DefaultsLayout } from '../layouts/drefaultLayouts/index';



export function Router() {
    return (
         <Routes  >
            <Route path='/' element={ <DefaultsLayout />}>
            <Route path="/" element={<Home />} />
            <Route path='/history' element= {<History />}/>
            </Route>
        </Routes>
       
    )
}

