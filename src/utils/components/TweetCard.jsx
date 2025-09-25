const TweetCard = (tweet) => {

    const title = tweet.tweet.title;
    const content = tweet.tweet.content;
    const username = tweet.tweet.userUsername;

    console.log(tweet);

	return (
		<div className="flex flex-row border border-slate-200 rounded p-4 max-w-3xl mx-auto my-4">
            <div className="max-w-20 mr-4 border-r border-r-slate-400 pr-4 flex flex-col items-center">
                <img src="/user.svg" alt="user icon" className="w-8 border border-slate-400 rounded-full p-1"/>
                <p className="font-semibold text-base text-center">{username}</p>
            </div>
            <div>
                <p className="text-lg font-semibold">{title}</p>
                <p>{content}</p>
            </div>
        </div>
	);
};

export default TweetCard;
