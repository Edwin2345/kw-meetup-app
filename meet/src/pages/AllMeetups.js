import {useEffect, useState} from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setisLoading] = useState(true);
  /*set loaded meetup with data array of object, else empty array */
  const [loadedMeetups, setLoadedMeetups] = useState([])
 
  /*useEffect --> side effect data */
  useEffect(()=>{
    setisLoading(true);
    fetch(
      'https://react-meetup-a924d-default-rtdb.firebaseio.com/meetups.json'
    ).then(  (response) => {
       return response.json();
    }).then(data => {
        const meetups =[];

        for(const key in data){
          const meetup = {
            id: key,
            ...data[key]
          }

          meetups.push(meetup);
        }
        
        setisLoading(false)
        setLoadedMeetups(meetups)
    });  
  }, [])
  
  if (isLoading){
    return(
      <section>
        <p>Loading</p>
      </section>
    )
  }
 
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}/>
    </section>
  );
}

export default AllMeetupsPage;
