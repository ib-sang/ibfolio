export const handleProfile = (
    fullname,
    adress,
    phone,
    email,
    status,
    subject
)=>{
    if(fullname !=='' && adress!=='' && phone !=='' && email!=='' && status!=='' && subject!==''){
        let profile = {
            "fullname": fullname,
            "adress": adress,
            "phone": phone,
            "email": email,
            "status": status,
            "subject": subject
        }
    
        return profile
    }
    return null;
    
}