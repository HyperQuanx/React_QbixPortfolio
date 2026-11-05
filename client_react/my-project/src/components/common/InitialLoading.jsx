import {
  LoadingOverlay,
  LoadingFrame,
  LoadingStitch,
  LoadingCard,
  LoadingTitle,
  LoadingCopy,
  LoadingStatus,
  LoadingPixels,
} from "../../assets/css/common/InitialLoading.styles";

const InitialLoading = () => (
  <LoadingOverlay role="status" aria-live="polite" aria-label="포트폴리오 방문 안내">
    <LoadingFrame>
      <LoadingStitch>
        <LoadingCard>
          <LoadingTitle>WELCOME</LoadingTitle>
          <LoadingCopy>제 포트폴리오에 방문해 주셔서 감사합니다.</LoadingCopy>
          <LoadingCopy className="permission">
            <span>이 사이트는 싸이월드 CMO님께 직접 연락하여</span>
            <span>디자인 사용 허가를 받은 후 제작되었습니다.</span>
          </LoadingCopy>
          <LoadingStatus>포트폴리오를 준비하고 있어요</LoadingStatus>
          <LoadingPixels aria-hidden="true">
            {Array.from({ length: 6 }, (_, index) => <i key={index} />)}
          </LoadingPixels>
        </LoadingCard>
      </LoadingStitch>
    </LoadingFrame>
  </LoadingOverlay>
);

export default InitialLoading;
