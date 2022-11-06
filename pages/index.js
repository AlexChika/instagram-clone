import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomeNavTop from "../components/mobile/layout/HomeNavTop";
import MobileLayout from "../components/mobile/layout";
import mobileCheck from "../utils/helpers/mobileCheck";

export default function Home({ isMobile }) {
  return (
    <>
      {isMobile ? (
        <MobileLayout showBottomNav={true} top={<HomeNavTop />}>
          <h1 className="relative">
            Hello guys.. ismobile = {isMobile.toString()}{" "}
          </h1>

          <div className="red">
            <p>
              we have a link ... this is{" "}
              {isMobile ? " mobile screen" : "Desktop screen"}
            </p>
            <Link href="/test">Click to tesst</Link>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum
            illo aperiam eum dolorum deleniti nisi reiciendis excepturi ipsum ad
            facilis incidunt at quae, quisquam, odio minus quibusdam asperiores
            rerum beatae veritatis. Esse consectetur exercitationem nostrum
            deserunt nam porro eum? Facilis minus, ducimus tenetur sunt aperiam
            dicta, rem provident tempore culpa ratione placeat velit praesentium
            quaerat doloremque mollitia repellendus veniam optio? Impedit, sequi
            sint alias ipsam, ab hic, qui iure natus itaque veritatis
            laudantium. Dicta quae eligendi voluptatibus quia provident.
            Laudantium tenetur itaque, incidunt sint, quos harum labore
            cupiditate, odit temporibus ipsa ut voluptatibus deleniti. Nostrum
            ipsam ratione pariatur? Quos magnam ex dicta, doloremque eius natus
            praesentium labore odio amet officia nesciunt illo architecto error
            tempore libero quis nam facere reiciendis illum ipsum. Illum
            perspiciatis eum numquam itaque quod optio in enim incidunt
            voluptatum vel similique voluptate a neque exercitationem, nisi
            cupiditate, natus dolorem quia doloribus accusamus. Deleniti esse
            delectus at cum, dolorum nisi nostrum, doloribus cumque
            necessitatibus, veniam sint neque molestiae nulla vitae corporis
            non! Doloremque deserunt rerum magni est, libero soluta delectus
            sunt molestiae maxime laboriosam cumque nostrum porro suscipit
            magnam voluptatibus illo odit consequuntur aliquid voluptatum
            eveniet. Sapiente nemo quis, quos saepe delectus iste tenetur
            nesciunt, laborum, atque ut eius! Dolor ullam facilis ad dolore nam,
            suscipit, laudantium delectus quia fugit totam alias laboriosam,
            iure tempora commodi recusandae. Aliquid molestias similique iure
            mollitia dolorem quibusdam consectetur. Accusamus doloribus
            consequatur, explicabo accusantium magnam autem tenetur nesciunt
            consequuntur odit cum nulla debitis molestias velit sit tempore
            eaque. Minima dignissimos rerum, voluptas quos nihil aperiam porro
            molestias error nobis saepe corporis ratione assumenda maiores
            autem. Iure placeat voluptate alias! Voluptatibus, minima sint!
            Ipsum optio consequatur ipsa deserunt ratione ipsam expedita sequi,
            facere eos deleniti saepe a laborum excepturi voluptates modi
            obcaecati, harum placeat vel adipisci corporis sunt consectetur. Sed
            ducimus optio praesentium dolorum odit doloribus tempore,
            perspiciatis velit consequuntur? Vitae ab consectetur nulla eius,
            quam a porro consequatur amet quae corrupti placeat totam esse quo.
            Error consequatur voluptas exercitationem, nobis amet quo tempora,
            officia necessitatibus voluptatum sunt optio corrupti sapiente nam
            quibusdam soluta? Accusantium harum recusandae velit qui magni, sunt
            laudantium fugit eveniet cumque eos unde libero iusto rerum veniam!
            Quidem enim ut vitae ipsam eaque architecto error non odit nemo
            minima ipsa, nisi debitis voluptate autem qui cupiditate aperiam
            eveniet doloremque similique sapiente quaerat. Est dicta animi totam
            ipsa. Non quis, nesciunt possimus veniam quod nisi vel esse error
            blanditiis odio cum reprehenderit fugit tempora corrupti consectetur
            optio nihil quae eveniet sunt labore temporibus. Dolor enim totam
            voluptatem soluta eius sequi doloremque cum, ea repudiandae!
            Molestias minima ad atque deleniti dolorum laudantium amet quidem
            recusandae iure possimus accusamus excepturi sapiente voluptates
            provident voluptas numquam fuga ullam, quibusdam laborum nulla rem
            omnis nemo dolores aspernatur. Harum aut cupiditate quam, repellat
            accusamus vero quis veniam possimus nam recusandae voluptatibus
            ipsum ut nulla provident aliquid pariatur quo? Nam recusandae
            mollitia earum? Perspiciatis totam necessitatibus iure quaerat,
            architecto, eveniet nesciunt amet autem reprehenderit ab corporis
            aliquid a? Quasi laudantium tempora saepe in perspiciatis?
          </div>
        </MobileLayout>
      ) : (
        <div>hello desktoopp</div>
      )}
    </>
  );
}

export const getServerSideProps = ({ req }) => {
  const UA = req.headers["user-agent"];
  const isMobile = mobileCheck(UA);
  return {
    props: {
      isMobile: isMobile,
    },
  };
};
