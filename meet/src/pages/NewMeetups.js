import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom';

function NewMeetupPage() {
    const history = useHistory();

    async function addMeetupHandler(meetupData){
       await fetch('https://react-meetup-a924d-default-rtdb.firebaseio.com/meetups.json',
          {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
              'Content-Type': 'application/json'
            }
          }
         ) 

      /* or use .push if want to go back*/
       history.replace("/")
    }

    return (
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
      </section>
    );
}
  
  export default NewMeetupPage;
