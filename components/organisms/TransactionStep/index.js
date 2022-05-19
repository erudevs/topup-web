import StepItem from "../../molecules/StepItem";

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem
            stepIcon="step1"
            stepTitle="1. Start"
            stepDesc1="Pilih salah satu game"
            stepDesc2="yang ingin kamu top up"
          />
          <StepItem
            stepIcon="step2"
            stepTitle="2. Fill Up"
            stepDesc1="Top up sesuai dengan"
            stepDesc2="nominal yang sudah tersedia"
          />
          <StepItem
            stepIcon="step3"
            stepTitle="3. Be a Winner"
            stepDesc1="Siap digunakan untuk"
            stepDesc2="improve permainan kamu"
          />
        </div>
      </div>
    </section>
  );
}
