import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Image from "next/image";

const Our = () => (
  <Main meta={<Meta title="Our Story" description="..." />}>
    <img
        src={`/assets/images/ourstory.png`}
        className="object-cover h-[645px] w-[1500px]"
      />
    <div className="flex flex-col justify-center items-center">
      
      <div className="text-2xl font-light my-10">Our Story</div>
      <div className="px-[300px] text-sm font-light text-center">
        <div className="mb-7">
          Our Story I'm a paragraph. Click here to add your own text and edit
          me. It’s easy. Just click “Edit Text” or double click me and you can
          start adding your own content and make changes to the font. Feel free
          to drag and drop me anywhere you like on your page. I’m a great place
          for you to tell a story and let your users know a little more about
          you.
        </div>
        <div className="mb-7">
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </div>
      </div>
    </div>
  </Main>
);

export default Our;
