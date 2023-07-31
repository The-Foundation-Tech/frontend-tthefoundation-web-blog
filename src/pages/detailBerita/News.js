import MainLayout from '../../Components/MainLayout';
import { images } from '../../constants';

const DetailBerita = () => {
  return (
    <MainLayout>
      <section className="pt-32 bg-white pb-20 mx-auto px-7 lg:px-15">
        <div className="grid grid-cols-1 w-full md:w-[550px] mx-auto gap-2 mb-10">
          <div className="grid grid-cols-1">
            <h1 className="text-customNavy text-3xl font-semibold">Buka bersama Mahasiswi Yayasan Munashoroh Indonesia</h1>
            <p className="text-gray-400 mx-auto text-sm">30 Juli 2023</p>
          </div>
          <div className="grid grid-cols-1">
            <img src={images.Berita1} alt="berita1" className="w-[550px] mx-auto rounded-sm" />
            <p className="text-gray-800 mx-auto italic">Foto Mahasiswi Yayasan Munashoroh Indonesia</p>
          </div>
          <div className=""></div>
        </div>
        <div className="grid grid-cols-1 mx-auto  gap-5 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem commodi quis, labore aliquid ex voluptate modi totam doloremque perferendis quidem numquam aut laboriosam blanditiis optio ipsum ratione unde doloribus repellat
            qui asperiores! Quos illo odit, reiciendis ipsa ducimus deserunt a recusandae, harum assumenda labore illum dolorum! Quis nulla corrupti libero porro veritatis explicabo quibusdam illo, ipsa, vel, corporis eos fugiat iusto!
            Earum debitis molestiae dicta accusamus assumenda. Nam nihil eos autem blanditiis deleniti similique! Architecto impedit, sequi, officiis commodi dolorem suscipit quidem, nemo nam molestias eaque perferendis. Reprehenderit culpa
            ullam minus, nemo accusantium sed accusamus in ut id assumenda quam veniam vel impedit sunt perspiciatis corrupti. Cum, qui tempora obcaecati, porro praesentium adipisci ipsum sed perferendis aliquid quisquam harum cumque
            accusamus nihil vel doloremque officia doloribus? Architecto harum debitis, fugiat maiores eligendi laudantium ratione quis laboriosam perferendis aperiam blanditiis obcaecati ex! Dicta quasi perferendis aut, alias ducimus
            cupiditate placeat debitis veniam magni iure ea, at repellat officia velit harum? Natus voluptates explicabo repudiandae? Doloremque tempore distinctio, fugit aliquid nihil temporibus corrupti ut odit unde cupiditate voluptatum
            mollitia autem. Nobis quas nesciunt atque rerum esse placeat. Omnis et veniam molestiae maiores ut qui odit officia, excepturi amet tenetur laudantium, nostrum mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sit fugiat, minus veniam accusamus libero amet corrupti esse pariatur nam fugit sed quod nulla non ut architecto dignissimos. Quae sunt explicabo tempora. A et
            natus officia eligendi magnam amet? Rerum error dicta provident impedit similique vero laborum alias nulla, omnis a magnam velit quis, culpa labore repudiandae non nam eligendi obcaecati rem dolorem blanditiis eum praesentium
            dolores. Repellendus, nihil minus iste assumenda quam fugit a ex laboriosam, error architecto non corporis optio officia perspiciatis, voluptatem ea deserunt aliquid odio praesentium delectus reiciendis repudiandae nobis
            voluptate sapiente! Ipsa pariatur sint iure repudiandae officia perferendis ipsam maxime ducimus hic. Esse architecto sunt ducimus sint provident quod molestias nam, voluptatem expedita vitae reprehenderit perferendis labore
            nostrum assumenda quasi commodi possimus beatae voluptatibus, aliquid hic voluptates eveniet magni placeat. Quis impedit sed eligendi! A ipsam perferendis iste eaque fugiat perspiciatis doloremque, maiores voluptatem dolorem
            reiciendis? Iste fugiat architecto quidem obcaecati sapiente nesciunt in harum cum error consequuntur sequi esse ducimus eligendi odit deserunt dolorum aut maxime adipisci exercitationem, qui repellat id quo autem totam!
            Deserunt quo autem adipisci porro reprehenderit animi, veniam nihil dolorum dolore minima eos! Ea rem doloribus quidem dolore consequuntur deleniti.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default DetailBerita;
