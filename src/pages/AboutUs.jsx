import React from 'react';

const features = [
  {
    icon: 'https://cdn.youmed.vn/wp-content/themes/youmed/images/dartboard.svg',
    title: 'Tìm chính xác',
    description:
      'Thông tin về phòng khám và bác sĩ luôn được cập nhật chính xác bởi đội ngũ chuyên nghiệp của YouMed. Bạn hoàn toàn có thể yên tâm tự nghiên cứu, đánh giá và đưa ra sự lựa chọn bác sĩ phù hợp với tình hình bệnh án của mình mà không cần phải mất nhiều thời gian.',
  },
  {
    icon: 'https://cdn.youmed.vn/wp-content/themes/youmed/images/medical-appointment.svg',
    title: 'Đặt lịch khám dễ dàng',
    description:
      'Chỉ với vài thao tác đơn giản, bạn có thể đặt lịch khám Online một cách nhanh chóng mà không cần phải gọi điện hoặc lo lắng rằng không có thông tin liên lạc của Bác sĩ.',
  },
  {
    icon: 'https://cdn.youmed.vn/wp-content/themes/youmed/images/news.svg',
    title: 'Thông tin y tế chính thống',
    description:
      'Trang thông tin sức khỏe chính thống và hữu ích hàng đầu Việt Nam. Toàn bộ nội dung được biên soạn bởi đội ngũ Bác sĩ, Dược sĩ nhằm mục đích cung cấp kiến thức y khoa chính thống cho cộng đồng.',
  },
];

const teamMembers = [
  {
    image:
      'https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/05/Nguyen-Ngoc-Hoang.jpg',
    name: 'Nguyễn Ngọc Hoàng',
    position: 'Tổng giám đốc - CEO',
  },
  {
    image:
      'https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/05/duong-anh-hoang.jpg',
    name: 'Dương Anh Hoàng',
    position: 'Marketing Director',
  },
  {
    image:
      'https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/05/do-tuan-minh-operation-manager-youmed-vn.jpg',
    name: 'Đỗ Tuấn Minh',
    position: 'Operations Manager',
  },
  {
    image:
      'https://cdn1.youmed.vn/tin-tuc/wp-content/uploads/2022/06/le-chi-canh-it-director-youmed-vn.jpeg',
    name: 'Lê Chí Cảnh',
    position: 'IT Director',
  },
];

const AboutUs = () => {
  return (
    <div>
      <section id="top" className="relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="container-top grid grid-cols-3">
            <div className="top-image flex justify-center items-center relative order-2">
              <img
                loading="lazy"
                className="relative p-4"
                width={500}
                height={500}
                src="https://cdn.youmed.vn/wp-content/themes/youmed/images/about-us.png"
                alt="About Us"
              />
            </div>
            <div className="heading-top flex flex-col justify-center order-1 p-4">
              <h1 className="text-3xl font-bold leading-none text-gray-900">
                Ứng dụng đặt khám hàng đầu tại Việt Nam
              </h1>
              <div className="mt-6">
                <p className="text-base leading-7 text-gray-700">
                  Chúng tôi xây dựng nền tảng y tế thông minh với sứ mệnh rút
                  ngắn khoảng cách giữa Bệnh nhân, Bác sĩ và các Cơ sở y tế
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="container-product grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="product-items flex flex-col rounded-lg bg-gray-100 cursor-pointer hover:bg-white hover:shadow-lg transform transition duration-300"
              >
                <div className="p-6 flex-grow">
                  <div className="mb-8">
                    <img
                      loading="lazy"
                      width={48}
                      height={48}
                      src={feature.icon}
                      alt={feature.title}
                    />
                  </div>
                  <h2 className="font-semibold text-xl mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-base leading-6 text-gray-700">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="our-team" className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-center text-2xl font-bold leading-8 tracking-tight text-gray-900">
              Đội ngũ điều hành
            </h2>
          </div>
          <div className="list-team grid grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-members flex flex-col items-center"
              >
                <div className="card block overflow-hidden rounded-lg border border-gray-300 mb-5 text-center">
                  <img
                    loading="lazy"
                    className="mx-auto w-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h3 className="text-base font-bold leading-6 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm leading-5 text-gray-600">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
