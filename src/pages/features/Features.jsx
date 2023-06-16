import image from "../../assets/images/description-1-app.png"
import "./Features.scss"
import { Button } from "../../components/button/Button"

export const Features = () => {
    return(
        <article class="firstArticle">
            <img src={image} alt="Mobile features"/>
            <div>
                <h2>Organize Your Time<br/> And Start Getting<br/> Results</h2>
                <p>Sync is the first mobile app on the market to harness the 
                    power of social connections to help you stop procrastinating 
                    and start getting things done. Give it a try and see the changes 
                    right away
                </p>
                <ul>
                    <li>Analyse and evaluate your current status and productivity</li>
                    <li>Begin monitoring your day to day routine with Sync app</li>
                    <li>See the improved results in no more than a couple of weeks</li>
                </ul>
                <Button buttonType="bttnPrimary">LIGHTBOX</Button>
            </div>
        </article>
    )
}
