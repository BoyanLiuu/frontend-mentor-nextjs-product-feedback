'use client';
import Button from "@/app/_components/button";
import Link from "next/link";
import Image from 'next/image'

export default function Page() {
    return <div className="flex flex-col w-full">
      <Link href='/'  className="mb-14 font-bold">
      <Image
        src="/shared/icon-arrow-left.svg"
        width={12}
        height={6}
        alt="go back arrow"
        className="mr-4 inline-block"

      />
        <span className="text-sm text-grayish-blue">Go Back</span>

        </Link>
        <div>
<form>
  <h1>Create New Feedback</h1>
<div>
 
<label htmlFor="title">Feedback Title</label>
<div id="title-description">Include any specific comments on what should be improved, added, etc.</div>
      <textarea id="title" name="title" value='' aria-describedby="title-description"/>
</div>


<div>
 
<label htmlFor="detail">Feedback Detail</label>
<div id="detail-description">Add a short, descriptive headline</div>
      <textarea id="detail" name="detail" value='' aria-describedby="detail-description"/>
</div>


<Button variant={"primary"} onClick={function (): void {
        throw new Error("Function not implemented.");
      } }>
        Add Feedback
        </Button>
        <Button variant={"info"} onClick={function (): void {
        throw new Error("Function not implemented.");
      } }>
       Cancel
        </Button>
</form>

        </div>

    </div>;
  }
  