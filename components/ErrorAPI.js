import Image from "next/image";

export default function ErrorAPI() {
  return (
    <div className="text-center my-5 pt-5">
      <Image
        alt="Sorry"
        width={350}
        height={200}
        src="/spidy.gif"
        className="rounded-pill"
      />

      <h4 className="my-3 text-warning">We&apos;re sorry</h4>
      <h6>Free version allows 100 API calls per day</h6>
      <h6>Please visit again tomorrow</h6>
    </div>
  );
}
