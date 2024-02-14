import Image from 'next/image';
import Link from 'next/link';
import web_project1 from '@/app/_assets/images/web_project.png';
import web_project2 from '@/app/_assets/images/walid.jpeg';
import CategoryLink from '@/app/_components/CategoryLink/CategoryLink';

const Projects = () => {
  const projects = [
    {
      _id: 1,
      projectCategory: 'Web Projects',
      projects: [
        {
          projectName: 'Personal Portfolio Website',
          role: 'Everything',
          technology: 'React, Bootstrap, CSS',
          description:
            'This is my personal portfolio website. This website contains my professional as well as academic experience.',
          features: [
            'Responsive Design, Dark Mode',
            'Resume, Projects, Experience, Skills',
            'CI/CD using git & GitHub pages'
          ],
          link: 'jajhjah',
          imageLink: web_project1
        }
      ]
    },
    {
      _id: 2,
      projectCategory: 'Academic Projects',
      projects: [
        {
          projectName: 'Travel Bug - Travel & Tourism Website:',
          role: 'Everything',
          technology: 'React, Bootstrap, CSS',
          description:
            'This is my personal portfolio website. This website contains my professional as well as academic experience.',
          features: [
            'Responsive Design, Dark Mode',
            'Resume, Projects, Experience, Skills',
            'CI/CD using git & GitHub pages'
          ],
          link: 'jajhjah',
          imageLink: web_project2
        }
      ]
    }
  ];

  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3'>
      <h2 className='text-center text-3xl'>My Projects</h2>
      <div className='lg:w-[60%] mx-auto mt-6'>
        <ul className='list-disc'>
          <li>
            <CategoryLink>Web Projects</CategoryLink>
          </li>
          <li>
            <CategoryLink>Academic Projects</CategoryLink>
          </li>
        </ul>
        {/* <div className='mt-6' id='webProjects'>
          <h3 className='text-2xl text-center'>Web Projects</h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center mt-6'>
            <Image
              src={web_project}
              alt='web project'
              priority
              className='shadow-xl'
            />
            <div className='text-lg flex flex-col gap-3'>
              <p>
                <span className='font-bold'>Personal Portfolio Website:</span>{' '}
                <Link
                  href='https://walid-hassan.vercel.app/'
                  target='_blank'
                  className='text-blue-700 hover:underline'
                >
                  Walid Hassan
                </Link>
              </p>

              <p>
                <span className='font-bold'>Role:</span> Everything
              </p>
              <p>
                <span className='font-bold'>Technology:</span> React, Bootstrap,
                CSS
              </p>
              <p>
                <span className='font-bold'>Description:</span> This is my
                personal portfolio website. This website contains my
                professional as well as academic experience.
              </p>
              <div>
                <span className='font-bold'>Features:</span>
                <ul className='list-disc pl-4'>
                  <li>Responsive Design, Dark Mode</li>
                  <li>Resume, Projects, Experience, Skills</li>
                  <li>CI/CD using git & GitHub pages</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {projects.map((project) => (
          <div className='mt-6' id={project._id} key={project._id}>
            <h3 className='text-2xl text-center'>{project.projectCategory}</h3>
            {project?.projects?.map((p) => (
              <div
                className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center mt-6'
                key={p.projectName}
              >
                <Image
                  src={p.imageLink}
                  alt='web project'
                  priority
                  className='shadow-xl'
                />
                <div className='text-lg flex flex-col gap-3'>
                  <p>
                    <span className='font-bold'>{p.projectName}</span>{' '}
                    <Link
                      href={p.link}
                      target='_blank'
                      className='dark:text-blue-400 text-blue-700 hover:underline'
                    >
                      Live Link
                    </Link>
                  </p>

                  <p>
                    <span className='font-bold'>Role:</span> {p.role}
                  </p>
                  <p>
                    <span className='font-bold'>Technology:</span>{' '}
                    {p.technology}
                  </p>
                  <p>
                    <span className='font-bold'>Description:</span>{' '}
                    {p.description}
                  </p>
                  <div>
                    <span className='font-bold'>Features:</span>
                    <ul className='list-disc pl-4'>
                      {p?.features?.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* <div className='mt-12' id='academicProjects'>
          <h3 className='text-2xl text-center'>Academic Projects</h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center mt-6'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/QsgtYCl5tgE?si=KoPkvGKCE491z1xc'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
              allowfullscreen
              className='w-full'
            />
            <div className='text-lg flex flex-col gap-3'>
              <p>
                <span className='font-bold'>
                  Travel Bug - Travel & Tourism Website:
                </span>{' '}
                <Link
                  href='https://walid-hassan.vercel.app/'
                  target='_blank'
                  className='text-blue-700 hover:underline'
                >
                  Github Link
                </Link>
              </p>

              <p>
                <span className='font-bold'>Role:</span> Frontend, Backend,
                Host(everything), Messaging, Schema, ERD, Class Diagram
              </p>
              <p>
                <span className='font-bold'>Technology:</span> NodeJs, Express,
                React, MongoDB, Bootstrap, CSS, JWT, Stripe
              </p>
              <p>
                <span className='font-bold'>Description:</span> Travel Bug is a
                travel and tourism website. It is a platform for hosting
                experiences, booking experiences, and providing transport
                guidelines. This project was made for Software Development
                Sessional course along with two other team members.
              </p>
              <div>
                <span className='font-bold'>Features:</span>
                <ul className='list-disc pl-4'>
                  <li>Hosting experiences, Booking experiences</li>
                  <li>Providing Transport Guidelines</li>
                  <li>Payment Gateway through Stripe</li>
                  <li>Messaging System, Authentication</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
