const Story = (props) => 
    <div className="story--card">
       <img src={props.data.img} alt="Mount Fuji, Japan" className="story--lead-image" />
       <div className="story--detail">
           <div className="story--geo story--content" >
               <img src={process.env.PUBLIC_URL + 'pin.png'} alt="location-pin" className="location-pin" />
               <h6 className="story--location">{props.data.country}</h6>
               <a href={props.data.gmap} className="story--link">View on Google Maps</a>
           </div>
           <h2 className="story--title story--content">{props.data.title}</h2>
           <h5 className="story--date story--content">{props.data.date}</h5>
           <p className="story--paragraph story--content">{props.data.detail}</p>
       </div>
    </div>

export default Story