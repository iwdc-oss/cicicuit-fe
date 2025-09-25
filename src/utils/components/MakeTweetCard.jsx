import { postTweet } from "../api";
import { useState } from "react";

const MakeTweetCard = () => {
    const [tweetContent, setTweetContent] = useState('');
    const [tweetTitle, setTweetTitle] = useState('');
    const handlePostTweet = async () => {
        postTweet({ content: tweetContent, title: tweetTitle });
        setTweetContent('');
        setTweetTitle('');
        window.location.reload();
    }

	return (
		<div className="flex flex-row border border-slate-200 rounded p-4 max-w-3xl mx-auto my-4">
			<img
				src="/user.svg"
				alt="user icon"
				className="w-8 h-8 border border-slate-400 rounded-full p-1"
			/>
			<div className="ml-4 flex flex-col w-full gap-2">
				<input
					onChange={(e) => setTweetTitle(e.target.value)}
					type="text"
					className="border border-slate-200 rounded-full h-8 p-2"
					placeholder="Title"
				/>
				<input
					onChange={(e) => setTweetContent(e.target.value)}
					type="text"
					className="border border-slate-200 rounded-full h-8 p-2"
					placeholder="Content"
				/>
				<button
					onClick={() => handlePostTweet()}
					className="border border-[#B75AF9] bg-[#B75AF9] text-white font-semibold py-1 px-2 rounded-full w-fit ml-auto"
				>
					Cuit
				</button>
			</div>
		</div>
	);
};

export default MakeTweetCard;
