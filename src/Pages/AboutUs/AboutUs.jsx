import Container from "../../Container";

const AboutUs = () => {
  return (
    <Container>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Journey and Mission
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Learn more about who we are and what we stand for.
            </p>
          </div>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Our Story
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                In the heart of a bustling city, a digital haven emerged,
                transforming dreams into achievements. The platform, Challenge
                Crafter, was born from the vision of a group of passionate
                innovators who believed in the power of competition to inspire
                excellence. Challenge Crafter became a hub where creativity met
                opportunity, hosting a myriad of contests from writing to
                coding, art to science.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Aspiring talents from around the world flocked to this virtual
                arena, showcasing their skills and connecting with mentors and
                peers. For many, Challenge Crafter was more than just a
                platform; it was a launchpad for their careers. Stories of
                triumph and collaboration echoed through its digital halls,
                proving that with the right stage, anyone could shine. Challenge
                Crafter wasn’t just organizing contests; it was shaping the
                future.
              </p>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
              <img
                className="rounded-lg shadow-lg"
                src="https://i.ibb.co/6m9jt5h/Screenshot-2024-06-14-215722.png"
                alt="Our team"
              />
            </div>
          </div>
          <div className="mt-12">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <img
                  className="rounded-lg shadow-lg"
                  src="https://i.ibb.co/WkX8F2t/mission.jpg"
                  alt="Our mission"
                />
              </div>
              <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Our Mission
                </h3>

                <p className="mt-4 text-lg text-gray-500">
                  At Challenge Crafter, our mission is to ignite the spark of
                  creativity and innovation through the power of competition. We
                  believe that every individual has unique talents waiting to be
                  discovered and honed. Our platform is dedicated to providing a
                  dynamic and inclusive space where aspiring talents can
                  showcase their skills, connect with mentors, and collaborate
                  with peers from around the world. By hosting a diverse range
                  of contests, from writing and coding to art and science, we
                  aim to inspire excellence, foster growth, and shape the future
                  of countless careers. At Challenge Crafter, we’re not just
                  organizing contests; we’re crafting opportunities for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
