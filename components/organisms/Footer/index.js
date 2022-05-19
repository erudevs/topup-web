import Image from 'next/image';
import FooterItem from '../../molecules/FooterItem';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem
                  title="Company"
                  listArrayItems={[
                    { id: 1, name: 'About Us' },
                    { id: 2, name: 'Press Release' },
                    { id: 3, name: 'Terms of Use' },
                    { id: 4, name: 'Privacy & Policy' },
                  ]}
                />
                <FooterItem
                  title="Support"
                  listArrayItems={[
                    { id: 1, name: 'Refund Policy' },
                    { id: 2, name: 'Unlock Rewards' },
                    { id: 3, name: 'Live Chatting' },
                  ]}
                />
                <FooterItem
                  title="Connect"
                  listArrayItems={[
                    { id: 1, name: 'hi@storegg.net' },
                    { id: 2, name: 'team@store.gg' },
                    { id: 3, name: 'Pasific 12, Jakarta Selatan' },
                    { id: 4, name: '021 - 1122 - 9090' },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
