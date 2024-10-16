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
      <p className="font-bold md:text-4xl text-xl text-white">
        Buzz - social media app
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Buzz is a social media app that lets you create your account, edit your profile, create posts that other users can see and react to, and so on. You can also chat with other users. 
      </p>
      <a href="https://www.youtube.com/watch?v=mynmWzcjg_8" className="text-orange font-bold" target="_blank" rel="noopener noreferrer">
        View on YouTube
      </a>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Expense tracker app
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This expense tracker app lets you track your expenses. You can also download the expense report. Moreover, you can view top expenses by category. 
      </p>
      <a href="https://abdulwahab5547.github.io/expense-tracker/" className="text-orange font-bold" target="_blank" rel="noopener noreferrer">
        View live
      </a>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Flux task management app
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This task management app lets you add today&apos;s and upcoming tasks. You can switch b/w 3 task views. There&apos;s also the option for creating pages and adding content in them. 
      </p>
      <a href="https://www.youtube.com/watch?v=DDYiXpnJXX0&t=92s" className="text-orange font-bold" target="_blank" rel="noopener noreferrer">
        View on YouTube
      </a>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Receiptify receipt maker
      </p>
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
    thumbnail: 
        "https://res.cloudinary.com/dhyshxpc1/image/upload/fl_preserve_transparency/v1725800867/buzz_qiv39y.jpg?_s=public-apps",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: 
        "https://res.cloudinary.com/dhyshxpc1/image/upload/fl_preserve_transparency/v1725941153/Screenshot_2024-09-10_at_9.02.58_AM_p59xbh.jpg?_s=public-apps"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: 
        "https://res.cloudinary.com/dhyshxpc1/image/upload/fl_preserve_transparency/v1725941153/Screenshot_2024-09-10_at_9.04.33_AM_xomsru.jpg?_s=public-apps"
      
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: 
        "https://res.cloudinary.com/dhyshxpc1/image/upload/fl_preserve_transparency/v1725800867/receiptify_yr2yy5.jpg?_s=public-apps"
  },
];
