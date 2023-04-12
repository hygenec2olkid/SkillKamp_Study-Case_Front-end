import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Shipping = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="text-center px-[350px]">
      <header className="text-2xl font-light my-10">Shipping & Returns</header>
      <p className="font-light text-sm">
        SHIPPING POLICY <br />
        I’m a shipping policy section. I’m a great place to update your
        customers about your shipping methods, packaging and costs. Use plain,
        straightforward language to build trust and make sure that your
        customers stay loyal! <br/><br/>I'm the second paragraph in your shipping policy
        section. Click here to add your own text and edit me. It’s easy. Just
        click “Edit Text” or double click me to add details about your policy
        and make changes to the font. I’m a great place for you to tell a story
        and let your users know a little more about you.
      </p>
      <p className="font-light text-sm my-10">
      <br/>RETURN & EXCHANGE POLICY <br />
        I’m a return policy section. I’m a great place to let your customers
        know what to do in case they’ve changed their mind about their purchase,
        or if they’re dissatisfied with a product. Having a straightforward
        refund or exchange policy is a great way to build trust and reassure
        your customers that they can buy with confidence.<br/><br/> I'm the second
        paragraph in your return & exchange policy. Click here to add your own
        text and edit me. It’s easy. Just click “Edit Text” or double click me
        to add details about your policy and make changes to the font. I’m a
        great place for you to tell a story and let your users know a little
        more about you.
      </p>
    </div>
  </Main>
);

export default Shipping;
