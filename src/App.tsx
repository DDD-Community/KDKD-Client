import HStack from "./components/common/Stack/HStack";
import VStack from "./components/common/Stack/VStack";
import Button from "./components/common/Button/Button";


function App() {
  return (
    <>
      <h1>Vite + React?</h1>
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

      <Button theme="primary">저장</Button>
      <Button theme="secondary">취소</Button>
      <Button theme="danger">위험</Button>
      <Button theme="outline">새 카테고리</Button>
    </>
  );
}

export default App;
