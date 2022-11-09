import { defineAbility } from '@casl/ability';

const ability = (user)=> defineAbility((can)=>{

    console.log (">>> ABILITY PARAMS USER",user);

    if (user) {
        if (user.role.key === "admin"){

            can("manager", "all");

        }  else {
                            // user.permission verilerine göre "can" ifadeleri oluşturulabilir
                user.permissions.map((item, index) => {
                console.log("PERMISSIONS ITEM >>>>", item);

                const permissionsKey = item.permissions_key  

            if (item.create === 1) {
                can("create", permissionsKey)
            }
            if (item.create === 1) {
                can("read", permissionsKey)
            }
            if (item.create === 1) {
                    can("update", permissionsKey)
                }
            if (item.create === 1) {
                    can("delete", permissionsKey)
                }
              
            })
        }
    }


    //"user_management" (yekti düzzenlemesi yapılacak permission seçtik) >>> userAPI daki kullanıcı permision key'i
    

})

export default ability;


