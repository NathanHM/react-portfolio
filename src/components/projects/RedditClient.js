export default function RedditClient() {

    return (<>

        <h3>Reddit Client</h3>

        <p>Recently I created a Reddit client that would allow me to visit the Subreddits that I visist most frequently
            To implement this, data was fetched from Reddit through their use of JSON. This made data scurbbing simple, as Reddit
            only requires ".json" to be attached to the end of a URL for data to be fetched. Implementing interactivity required
            use of Reddit's API, through which I implemented the ability to vote on both posts and comments. The client was
            designed to be usable on both desktop and mobile displays. Since this project was designed for personal use, I only
            designed it with the features I use in scope. If I were to revisit this project and adapt it for wider use, I would
            make more use of the API to create posts and leave comments. I would also allow the user to choose which subreddits
            the client displays to them. </p>

        <p> The client can be seen in operation at the link below. It does require a Reddit account to be accessed. The code can
            be found on my GitHub.</p>

        <h4><a href="https://ssl-reddit-client.netlify.app/" target="_blank" rel="noreferrer">Reddit Client</a></h4>

    </>)
}