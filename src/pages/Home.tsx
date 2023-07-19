import HStack from '@/components/common/Stack/HStack';
import VStack from '@/components/common/Stack/VStack';
import { Button } from '@/components/ui/button';

function Home() {
  return (
    <div>
      <h1>home</h1>
      <VStack gap={20}>
        <HStack justifyContent="center" alignItems="center" gap={40}>
          <div>1231231323123123</div>
          <div>asdk;lfja;slkdjfkl;sajdfk;l</div>
          <div>934hg9gh8jv9rugjvnm9nuvgb943ugbh</div>
        </HStack>

        <VStack justifyContent="center" alignItems="center" gap={40}>
          <div>1231231323123123</div>
          <div>asdk;lfja;slkdjfkl;sajdfk;l</div>
          <div>934hg9gh8jv9rugjvnm9nuvgb943ugbh</div>
        </VStack>
      </VStack>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Button>Button</Button>
      <Button variant="outline">Button</Button>
    </div>
  );
}

export default Home;
