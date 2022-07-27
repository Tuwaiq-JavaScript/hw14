
 import{log} from "../data";
 import{Login} from "./login";


export function Logined(){
const postnew = log.map((Login) => <Login Login={Login}/>);
return
 <div>
    {postnew}
   
</div>

}