"use client";
import LayoutGrid from "./layout";

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <a href="https://abdulwahabasif.com/projects/tournament-app" className="font-bold md:text-4xl text-xl text-white">
        <span>Tournament Management System</span>
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A tournament management app that lets you create tournaments, organize them, and manage different roles like managers, operators, and players with ease.
      </p>
      <a href="https://abdulwahabasif.com/projects/tournament-app" className="text-orange font-bold" target="_blank" rel="noopener noreferrer">
        View full page
      </a>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <a href="https://cio-tasks.vercel.app/" className="font-bold md:text-4xl text-xl text-white">
        <span>CheckItOff - To-Do List App</span>
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        CheckItOff is a to-do list app that lets you add various types of tasks under different sections. It also lets you add and track your goals. Moreover, there are other features in it, like a pomodoro timer and note-taking.
      </p>
      <a href="https://cio-tasks.vercel.app/" className="text-orange font-bold" target="_blank" rel="noopener noreferrer">
        View live
      </a>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <a href="https://www.youtube.com/watch?v=mynmWzcjg_8" className="font-bold md:text-4xl text-xl text-white">
        <span>Buzz - Social media app</span>
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Buzz is a versatile social media app I made. It has foundational features of any social media app. 
      </p>
      <a href="https://www.youtube.com/watch?v=mynmWzcjg_8" className="text-orange font-bold" target="_blank" rel="noopener noreferrer">
        View on YouTube
      </a>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <a href="https://receiptify-app-wine.vercel.app/" className="font-bold md:text-4xl text-xl text-white">
        <span>Receiptify receipt maker</span>
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        It&apos;s a receipt maker app that lets you create stunning receipts that you can easily customize. You can also download or email them. If you&apos;re logged in, the app also keeps track of all your receipts. 
      </p>
      <a href="https://receiptify-app-wine.vercel.app/" className="text-orange font-bold" target="_blank" rel="noopener noreferrer">
        View live
      </a>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "https://res.cloudinary.com/dhyshxpc1/image/upload/v1737309818/1_hia0kl.jpg"
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: 
        "https://res.cloudinary.com/dhyshxpc1/image/upload/v1737309929/Screenshot_2025-01-19_at_11.02.07_PM_y8zkvf.jpg"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: 
        "https://res.cloudinary.com/dhyshxpc1/image/upload/v1737310051/buzz-social-media_qkjsu8.png"
      
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: 
        "https://res.cloudinary.com/dhyshxpc1/image/upload/fl_preserve_transparency/v1725800867/receiptify_yr2yy5.jpg?_s=public-apps"
  },
];
