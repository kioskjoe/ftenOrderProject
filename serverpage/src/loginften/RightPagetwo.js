import CustomerAdd from '../RightMenu/CustomerAdd';
import RightMenuBar from '../RightMenu/CustomerListTable';


function RightPagetwo() {
  return (
    <div className="App">
          
          <CustomerAdd stateRefresh={RightMenuBar.stateRefresh}/>
          <RightMenuBar/>
    </div>
  )
}
export default RightPagetwo;