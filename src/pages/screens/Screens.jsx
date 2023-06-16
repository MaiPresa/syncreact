import "./Screens.scss"
import screensimg from "../../assets/images/description-2-app.png"
import { Button } from "../../components/button/Button"

export const Screens = () => {
    return(
        <article class="secondArticle blueBg" id="thirdScroll">
            <img src={screensimg} alt="App screens"/>
            <div>
                <div class="screensContainer">
                    <div class="purpleBttn smallBold">
                        <div class="watchIcon"></div><p>Schedule</p>
                    </div>
                    <div class="whiteBttn smallBold">
                        <div class="listIcon"></div><p>Tracking</p>
                    </div>
                    <div class="whiteBttn smallBold">
                        <div class="calendarIcon"></div><p>Organize</p>
                    </div>
                </div>
                <p>Schedule tasks to keep track of their completion. Sync 
                    provides multiple scheduling options including alarms and 
                    reminders.
                </p>
                <ul>
                    <li><p>You can always add new tasks or change the settings of 
                        existing ones in your calendar view or the app control 
                        panel</p>
                    </li>
                    <li><p>It's easy to stay focused on your most important daily 
                        activities that will get you closer to meeting your goals</p>
                    </li>
                    <li><p>Use phone reminders to free up your long term memory 
                        which will reduce stress and make you more productive</p>
                    </li>
                </ul>
                <div>
                    <Button buttonType="bttnPrimary">LIGHTBOX</Button>
                    <Button buttonType="bttnSecondary">PRIVACY</Button>
                </div>
            </div>
        </article>
    )
}

