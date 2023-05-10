import { Container, Space, Text, Title, rem } from "@mantine/core";

const ErrorPage = () => {
  return (
    <Container size="xl">
      <Title>Lỗi: Không tìm thấy</Title>
      <Space h={rem(36)} />
      <Text>
        Nếu quý khách nhìn thấy trang này nghĩa là chúng tôi không cung cấp dịch
        vụ đó hoặc không có thông tin quý khách cần
      </Text>
    </Container>
  );
};

export default ErrorPage;
