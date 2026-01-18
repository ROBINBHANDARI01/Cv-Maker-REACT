function AboutForm({data,setData}){
    return(
        <div>
            <u><h2>About</h2></u>
           <textarea
            value={data.aboutYou}
            placeholder="About you"
            onChange={(e)=> setData({...data,aboutYou:e.target.value})}
            />
        </div>
    );

}

export default AboutForm;