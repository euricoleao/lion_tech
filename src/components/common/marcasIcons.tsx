import Image from "next/image";

const MarcasIcons = () => {
  return (
    <div className="flex w-full flex-col px-1 [&::-webkit-scrollbar]:hidden">
      <p>Marcas parceiras</p>
      <div className="flex h-full items-center justify-center gap-2 bg-gray-200">
        {/* Placeholder for brand icons */}
        <div className="flex h-28 flex-col items-center justify-center gap-2 rounded-2xl bg-white p-2">
          <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-3xl border-2 bg-white p-2">
            <Image src="/nnike-1.png" alt="BEWEAR" width={80} height={80} />
          </div>

          <p className="font-semibold">Nike</p>
        </div>

        <div className="flex h-28 flex-col items-center justify-center gap-2 rounded-3xl border-2 bg-white p-2">
          <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-3xl border-2 bg-white p-2">
            <Image src="/puma-1.png" alt="BEWEAR" width={80} height={80} />
          </div>
          <p className="font-semibold">Puma</p>
        </div>
        <div className="flex h-28 flex-col items-center justify-center gap-2 rounded-2xl bg-white p-2">
          <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-3xl border-2 bg-white p-2">
            <Image src="/adidas-1.png" alt="BEWEAR" width={80} height={80} />
          </div>
          <p className="font-semibold">Adidas</p>
        </div>

        <div className="flex h-28 flex-col items-center justify-center gap-2 rounded-2xl bg-white p-2">
          <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-3xl border-2 bg-white p-2">
            <Image src="/ballance.png" alt="BEWEAR" width={80} height={80} />
          </div>
          <p className="font-semibold">Balance</p>
        </div>
      </div>
    </div>
  );
};

export default MarcasIcons;
