import Link from "next/link";

interface ButtonProps {
    text: string;
    URL: string;
}

export default function Button({ text, URL }: ButtonProps) {
    return (
        <Link
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className='bg-orange w-fit hover:opacity-80 text-white px-6 py-3 rounded-full font-bold'>
                <span>{text}<span className="pl-3"><i className="fa-solid fa-arrow-right"></i></span></span>
            </div>
        </Link>
    )
}