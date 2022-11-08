import { defineAbility } from '@casl/ability';

const ability = (user)=> defineAbility((can)=>{

    console.log (">>> ABILITY PARAMS USER",user)


    //"user_management" (yekti düzzenlemesi yapılacak permission seçtik) >>> userAPI daki kullanıcı permision key'i
    can("read", "user_management");
    can("read", "permission_management");

})

export default ability;


