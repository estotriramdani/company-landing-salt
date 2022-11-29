import { LogoWhite } from '../../atoms/Logo';

const FooterSection = () => {
  return (
    <footer
      className="bg-bottom px-8 pt-8 pb-12"
      style={{ backgroundImage: "url('/img/bg-footer.png')" }}
    >
      <LogoWhite style={{ width: '220px' }} />
      <div className="mt-8 bg-white px-6 py-7">
        <h4 className="mb-4 font-bold uppercase text-[#00537C]">Technology Departement</h4>
        <p className="text-[#25A0D8]">
          Jl. Lembong No 8 <br />
          Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat
        </p>
      </div>
      <ul className="flex flex-col gap-3 text-white mt-6">
        <li>
          <a href="#about-us" className="hover:underline">
            Who We Are
          </a>
        </li>
        <li>
          <a href="#core-values" className="hover:underline">
            Our Values
          </a>
        </li>
        <li>
          <a href="#speciality" className="hover:underline">
            The Perks
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default FooterSection;
