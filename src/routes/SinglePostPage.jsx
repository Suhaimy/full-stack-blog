import { Link } from "react-router";
import ImageComponent from "../components/ImageComponent";
import PostMenuActions from "../components/PostMenuActions";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum
            ducimus neque.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam enim
            odio est placeat tenetur eligendi illo inventore quam commodi fugit.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <ImageComponent src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-9">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            expedita, nihil sapiente eligendi cumque iure doloremque magni
            labore dignissimos ad eos autem a quis cupiditate, soluta provident.
            Possimus ullam blanditiis modi nemo! Pariatur molestias similique
            corrupti modi. Repellat perspiciatis officiis rerum, magni laborum
            quod esse vero, fugiat dolore ducimus necessitatibus, sed alias
            dignissimos ipsum totam aperiam. Error voluptatem animi voluptas,
            minima, saepe architecto ipsum nostrum nesciunt numquam accusantium
            culpa repellendus laudantium cum distinctio corrupti unde, veniam
            quod ad eaque! Itaque totam ullam cum dolor neque sunt non iste
            placeat, possimus quo maxime. Omnis sed nihil esse, perspiciatis sit
            nam quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            expedita, nihil sapiente eligendi cumque iure doloremque magni
            labore dignissimos ad eos autem a quis cupiditate, soluta provident.
            Possimus ullam blanditiis modi nemo! Pariatur molestias similique
            corrupti modi. Repellat perspiciatis officiis rerum, magni laborum
            quod esse vero, fugiat dolore ducimus necessitatibus, sed alias
            dignissimos ipsum totam aperiam. Error voluptatem animi voluptas,
            minima, saepe architecto ipsum nostrum nesciunt numquam accusantium
            culpa repellendus laudantium cum distinctio corrupti unde, veniam
            quod ad eaque! Itaque totam ullam cum dolor neque sunt non iste
            placeat, possimus quo maxime. Omnis sed nihil esse, perspiciatis sit
            nam quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            expedita, nihil sapiente eligendi cumque iure doloremque magni
            labore dignissimos ad eos autem a quis cupiditate, soluta provident.
            Possimus ullam blanditiis modi nemo! Pariatur molestias similique
            corrupti modi. Repellat perspiciatis officiis rerum, magni laborum
            quod esse vero, fugiat dolore ducimus necessitatibus, sed alias
            dignissimos ipsum totam aperiam. Error voluptatem animi voluptas,
            minima, saepe architecto ipsum nostrum nesciunt numquam accusantium
            culpa repellendus laudantium cum distinctio corrupti unde, veniam
            quod ad eaque! Itaque totam ullam cum dolor neque sunt non iste
            placeat, possimus quo maxime. Omnis sed nihil esse, perspiciatis sit
            nam quaerat.
          </p>
        </div>
        {/* menu */}

        <div className="px-4 h-max sticky top-8">
          <h1>Author</h1>
          <div className="">
            <ImageComponent
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
            <Link>John Doe</Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div className="flex gap-2">
              <Link>
                <ImageComponent src="facebook.svg" />
              </Link>
              <Link>
                <ImageComponent src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
