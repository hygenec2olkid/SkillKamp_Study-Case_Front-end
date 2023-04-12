import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Store = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="text-center px-[350px]">
      <header className="text-2xl font-light my-10">Store Policy</header>
      <div className="font-light text-sm">
        <p className="mb-14">
          CUSTOMER CARE <br />
          I’m a customer care section. I’m a great place to write a long text
          about your company and your services, and, most importantly, how to
          contact your store with queries. Writing a detailed Customer Care
          policy is a great way to build trust and reassure your customers that
          they can buy with confidence.
          <br />
          <br /> I'm the second paragraph in your customer care section. Click
          here to add your own text and edit me. It’s easy. Just click “Edit
          Text” or double click me to add details about your policy and make
          changes to the font. I’m a great place for you to tell a story and let
          your users know a little more about you.
        </p>
        <p className="mb-14">
          PRIVACY & SAFETY <br />
          I’m a privacy & safety policy section. I’m a great place to inform
          your customers about how you use, store, and protect their personal
          information. Add details such as how you use third-party banking to
          verify payment, the way you collect data or when will you contact
          users after their purchase was completed successfully.
          <br />
          <br /> Your user’s privacy is of the highest importance to your
          business, so take the time to write an accurate and detailed policy.
          Use straightforward language to gain their trust and make sure they
          keep coming back to your site!
        </p>
        <p>
          <br />
          WHOLESALE INQUIRIES <br />
          I’m a wholesale inquiries section. I’m a great place to inform other
          retailers about how they can sell your stunning products. Use plain
          language and give as much information as possible in order to promote
          your business and take it to the next level!
        </p>
        <p className="mb-14">
          <br />
          I'm the second paragraph in your wholesale inquiries section. Click
          here to add your own text and edit me. It’s easy. Just click “Edit
          Text” or double click me to add details about your policy and make
          changes to the font. I’m a great place for you to tell a story and let
          your users know a little more about you
        </p>
        <p className="mb-14">
          PAYMENT METHODS <br />- Credit / Debit Cards <br />- PAYPAL<br /> - Offline Payments
        </p>
      </div>
    </div>
  </Main>
);

export default Store;
