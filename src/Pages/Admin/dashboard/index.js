import { Can } from "../../../Ability/can"

const Dashboard = (props) =>{

    return(
        <div className="container">
            <div>
            </div>
            <div>
            burası admin dashboard
            </div>

            <Can I="read" a="user_management">
            yes you can read a user
            </Can>
            <div className="col col-btn">
            <button className="btn btn-secondary">
                Kategori Yönet            
            </button>
            <button className="btn btn-info">
                Blog Yönet            
            </button>
            </div>
           
          
        </div>
    )

}
export default Dashboard