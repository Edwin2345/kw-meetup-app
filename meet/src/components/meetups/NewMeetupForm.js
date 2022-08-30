import { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css"

function NewMeetupForm(props){
    /*useRef --> get values after render (triggered by user action) */
    /*useful to get dom elment information directly after submit */

    const titleInput = useRef();
    const imageInput = useRef();
    const addressInput = useRef();
    const dateInput = useRef();
    const descriptionInput = useRef();

    function submitHandler(event){
       event.preventDefault();

       const enteredTitle = titleInput.current.value
       const enteredImage = imageInput.current.value
       const enteredAddress = addressInput.current.value
       const enteredDate = dateInput.current.value
       const enteredDescription = descriptionInput.current.value

       const meetupData ={
           title: enteredTitle,
           image: enteredImage,
           address: enteredAddress,
           date: enteredDate,
           description: enteredDescription
       }

       props.onAddMeetup(meetupData) 
    }


    return(
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                {/* title*/}
                <div className={styles.control}>
                    <label htmlFor="title">Meetup Title</label>
                    {/* get value from dom using ref*/}
                    <input type="text" required id="title" ref={titleInput}/>
                </div>
                {/*Image*/}
                <div className={styles.control}>
                    <label htmlFor="image">Image URL</label>
                    <input type="url" required id="image" ref={imageInput}/>
                </div>
                {/*Address*/}
                <div className={styles.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressInput}/>
                </div>
                {/*Date*/}
                <div className={styles.control}>
                    <label htmlFor="date">Date</label>
                    <input type="date" required id="date" ref={dateInput}/>
                </div>
                {/*Details*/}
                <div className={styles.control}>
                    <label htmlFor="description">Description</label>
                    <textarea type="date" required id="description" rows="5" ref={descriptionInput}/>
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;
