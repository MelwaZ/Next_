import Image from "next/image";

export default function CustomFooter() {
  return (
    <footer className="flex flex-col items-center justify-center w-full border-t border-gray-300 p-4 bg-blue-300 lg:bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-lg py-4 lg:space-x-16 space-y-4 lg:space-y-0">
        
        <div className="flex space-x-8">
          <Image
            src="/Img/hitap-logo.png"
            alt="HITAP Logo"
            width={80} 
            height={40} 
            className="custom-image"
          />
          <Image
            src="/Img/Thaihealth-logo.png"
            alt="ThaiHealth Logo"
            width={80}
            height={40}
            className="custom-image"
          />
        </div>

        <div className="text-center lg:text-right text-sm text-gray-700">
          โครงการประเมินเทคโนโลยีและนโยบายด้านสุขภาพ ชั้น 6 อาคาร 6 กรมอนามัย
          กระทรวงสาธารณสุข ถ.ติวานนท์ ต.บางเขน อ.เมือง จ.นนทบุรี 11000<br />
          โทร : +662-590-4549, +662-590-4374-5<br />
          โทรสาร : +662-590-4369<br />
          E-mail : hitap@hitap.net
        </div>
      </div>

      <div className="w-full border-t border-gray-300 mt-4 pt-2 text-sm text-gray-500 text-center lg:text-left">
        © Copyright - HITAP 2014
      </div>
    </footer>
  );
}
