import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
     
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader="Our story" mainHeader="About us" />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            The Cosimo’s family tradition begins with a passion for culinary
            excellence. It continues with a storied reputation for award-winning
            cuisine, and a legacy spanning more than 50 years. It continues
            today in The Pizza Shop, where passion and tradition meet in a warm,
            inviting and contemporary atmosphere.
          </p>
          <p>
            Voted Best in the Hudson Valley, The Pizza Shop is old-school, yes,
            but not old-fashioned. Recipes that have been in the family for
            generations have been carefully reimagined. Familiar dishes
            including our pizza, pasta, and wings have been done a little
            differently, given new, enticing twists.{" "}
          </p>

          <p>
            {" "}
            And, as always, the freshest local ingredients are used in all of
            our dishes, from entrees to our farm-fresh salads, whenever
            possible. Even our ice cream is handmade in small batches in the
            Hudson Valley using hormone-free New York State milk and Cream.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader="Don't hesitate" mainHeader="Contact us" />

        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46738123123"
          >
            +46 738 123 123
          </a>
        </div>
      </section>
     
    </>
  );
}
