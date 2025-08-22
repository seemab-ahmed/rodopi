
import Image from "next/image";

export const LetsTalk = ({ data }) => {
  if (!data) {
    return null; // No data means nothing to render
  }

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 rounded-2xl shadow-md">
      {/* Left Side - Text */}
      <div className="max-w-xl mb-8 md:mb-0">
        {data.question && (
          <p className="text-red-600 font-semibold">{data.question}</p>
        )}
        {data.title && (
          <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        )}
        {data.description && (
          <p className="text-gray-700 mb-6">{data.description}</p>
        )}

        <div className="space-y-2">
          {data.phone && (
            <div className="flex items-center gap-2">
              <span className="material-icons">phone</span>
              <a
                href={`tel:${data.phone}`}
                className="text-gray-800 hover:text-red-600"
              >
                {data.phone}
              </a>
            </div>
          )}
          {data.email && (
            <div className="flex items-center gap-2">
              <span className="material-icons">email</span>
              <a
                href={`mailto:${data.email}`}
                className="text-gray-800 hover:text-red-600"
              >
                {data.email}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Image */}
      {data.image && (
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={data.image}
            alt={data.title || "Contact"}
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>
      )}
    </section>
  );
};
