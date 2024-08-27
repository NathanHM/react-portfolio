import pdf from './dissertation.pdf';

export default function Mario() {

    return (<>

        <h3>Solving Super Mario Bros. Using Behavioural Based Reinforcement Learning</h3>

        <p>In my final year at the University of Glasgow, I wrote my dissertation on attempting to solve Super
        Mario Bros. using abehavioural-based approach. Behavioural-based learning is a method of AI training, 
        originating in robotics, in which individual behavviours are trained, and then these behaviours are 
        implemented by a choreographer to carry out the desired task.</p>

        <p>In this project, behaviours were interpreted as discrete button pushes. Training data was recorded 
        by a user, with keylogging tracking each button push, and each corresponding frame being displayed by
        the game. Each behaviour was then trained so that given a frame as input, the likelihood of using that
        button would be calculated. If the likelihood was high enough, the button should be pressed.</p>

        <p>With these behaviours trained to a high standard, the choreographer was trained to implement them.
        The choreographer measured success by the distance travelled throughout a level of the game, with
        completion of the level being the highest level of success.</p>

        <p>At the end of the project, the choreographer was capable of implementing these behaviours to solve
        the first level of the game. However, utilising this approach seemed to provide few benefits over
        training a choreographer without first implenting behaviours. The training time was effectively the same
        utilising either method. Still, I enjoyed being challenged to learn new technologies and technqiues for
        AI training.</p>

        <p> The full dissertation for the project can be accessed below.</p>

        <h4><a href={pdf} target="_blank" rel="noreferrer">Dissertation</a></h4>

    </>)
}