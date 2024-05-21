
import { TbPointFilled } from "react-icons/tb";
import "../home.css"

const AboutPlasticBangla = () => {
      return (
            <div className="sub more kalpurush">
                  <p> প্লাস্টিক মূলত পেট্রোলিয়াম থেকে প্রাপ্ত নন-বায়োডিগ্রেডেবল পলিমার। আজ আধুনিক জীবন প্লাস্টিক ছাড়া প্রায় অসম্ভব

                  </p>
                  <ul className="ulHome">
                        <li className="checkmarks kalpurush">  <TbPointFilled size={25} />
                              <p className="w-[90%]">প্লাস্টিক মূলত পেট্রোলিয়াম থেকে প্রাপ্ত নন-বায়োডিগ্রেডেবল পলিমার। আজ আধুনিক জীবন প্লাস্টিক ছাড়া প্রায় অসম্ভব
                              </p>
                        </li>
                        <li className="checkmarks">  <TbPointFilled size={25} />
                              <p className="w-[90%]">প্লাস্টিক বর্জ্য প্লাস্টিকের অতিরিক্ত উৎপাদন,প্রক্রিয়াকরণ এবং প্যাকেজিং শিল্প কারখানা থেকে উৎপন্ন হয়।</p></li>
                        <li className="checkmarks">  <TbPointFilled size={25} />
                              <p className="w-[90%]">২০ বিলিয়নেরও বেশি প্লাস্টিক পৃথিবীতে নিক্ষেপ করা হয়।</p>
                        </li>
                        <li className="checkmarks">  <TbPointFilled size={25} /><p className="w-[90%]">২০ বিলিয়নেরও বেশি প্লাস্টিক পৃথিবীতে নিক্ষেপ করা হয়।</p></li>
                        <li className="checkmarks">  <TbPointFilled size={25} /><div className="w-[90%]">প্লাস্টিক জমে থাকা এবং পরিবেশ ও মানব স্বাস্থ্যের উপর এর ক্ষতিকর প্রভাবের কারণে প্লাস্টিক বর্জ্যে দৃশ্যমানতা বাড়ছে।</div>
                        </li>
                  </ul>
            </div >
      )
}
const AboutPlastic = () => {
      return (
            <div className="sub more">
                  <p> Plastic is mainly a petroleum-derived non-biodegradable polymer. Today modern life is almost impossible without plastics
                  </p>
                  <ul className="ulHome">
                        <li className="checkmarks">  <TbPointFilled size={25} />
                              <p className="w-[90%]">It is estimated that around 343 million tonnes (MT) of plastic is produced every year.</p>
                        </li>
                        <li className="checkmarks">  <TbPointFilled size={25} />
                              <p className="w-[90%]">Plastic Wastes (PW) are produced by massive manufacturing, processing, and packaging industries.</p></li>
                        <li className="checkmarks">  <TbPointFilled size={25} />
                              <p className="w-[90%]">More than 20 billion plastic bottles are tossed on earth.</p>
                        </li>
                        <li className="checkmarks">  <TbPointFilled size={25} /><p className="w-[90%]">Only approximately 10% of total world plastic is recycled.</p></li>
                        <li className="checkmarks">  <TbPointFilled size={25} /><div className="w-[90%]">Plastic visibility is increasing due to plastic accumulation and its harmful influence on the environment and human health.</div>
                        </li>
                  </ul>
            </div >
      )
}

export default AboutPlastic;