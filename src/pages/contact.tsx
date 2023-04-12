import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Contact = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div>
      <div className="text-3xl font-light flex justify-center items-center my-16">
        Contact Us
      </div>

      <div className="grid grid-cols-3 gap-0 px-[300px] mb-20">
        <div className="px-[55px] text-center font-light">
          <p>VISIT US</p>
          <br />
          <p>500 Terry Francois St. San Francisco, CA 94158 123-456-7890</p>
        </div>
        <div>
          <div className="px-[55px] text-center font-light">
            <p>OPENING HOURS</p>
            <br />
            <p>
              Mon - Fri: 7am - 10pm ​​Saturday: 8am - 10pm ​Sunday: 8am - 11pm
            </p>
          </div>
        </div>
        <div>
          <div className="px-[78px] text-center font-light">
            <p>CUSTOMER SERVICE</p>
            <br />
            <p>1-800-000-000 123-456-7890 info@mysite.com</p>
          </div>
        </div>
      </div>

      <form className="mb-20">
        <h1 className="text-center font-light mb-10">
          FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE
        </h1>
        <div className="flex justify-center gap-10">
          <div>
            <label className="block text-lg font-light leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2 ">
              <input
                type="text"
                className=" border-primary-main4 border-2 rounded-sm w-[400px]"
              ></input>
            </div>
          </div>
          <div>
            <label className="block text-lg font-light leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                className=" border-primary-main4 border-2 rounded-sm w-[400px] "
              ></input>
            </div>
          </div>
        </div>
        <div className="block text-lg font-light leading-6 text-gray-900 pl-[340px]">
          <p>Email *</p>
          <input
            type="text"
            required
            className=" border-primary-main4 border-2 rounded-sm w-[840px] "
          ></input>
          <p>Subject</p>
          <input
            type="text"
            className=" border-primary-main4 border-2 rounded-sm w-[840px] "
          ></input>
          <p>Message</p>
          <input
            type="text"
            className=" border-primary-main4 border-2 rounded-sm w-[840px] "
          ></input>
        </div>
        <div className="flex justify-center my-5">
          <button className="bg-primary-main1 w-[100px] py-2 text-primary-main2 font-light">
            Submit
          </button>
        </div>
      </form>
    </div>
  </Main>
);

export default Contact;
