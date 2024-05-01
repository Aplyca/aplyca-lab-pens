import React from "react";
import db from "./db.json";
import VideoSection from "./VideoSection";

const App: React.FC = () => {
  return (
    <>
      <VideoSection url={db.url} rows={db.rows}>
        <div className="bg-white p-10 shadow w-full max-w-xl mt-auto">
          <h1 className="text-4xl font-bold mb-5">Lorem ipsum dolor sit amet</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod scelerisque purus, ut porta elit volutpat porttitor.
          </p>
        </div>
      </VideoSection>
      <div className="bg-white py-20">
        <div className="max-w-3xl mx-auto text-lg flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod scelerisque purus, ut porta elit volutpat porttitor. Mauris
            porttitor nibh non nisi sollicitudin vulputate. Vivamus venenatis
            auctor elit, quis lobortis nulla. Praesent sagittis metus justo, in
            tristique sem mollis quis. Mauris vitae ex augue. Ut nulla neque,
            scelerisque at malesuada nec, pretium sit amet dolor. Nullam
            interdum mi mauris, quis vestibulum diam laoreet a. Sed ut orci
            dictum, hendrerit lectus porta, mattis nunc. Morbi eu felis
            suscipit, tristique massa sed, ultrices mi. In facilisis ultricies
            suscipit. Cras pretium ultricies porta.
          </p>

          <p>
            Duis semper felis felis, sit amet ultrices lectus lacinia non. In a
            lectus tempus, ullamcorper risus ac, fermentum ligula. Donec in dui
            at lectus tincidunt aliquam sit amet vel tellus. Nulla rutrum id
            velit ac bibendum. Donec vitae erat ut turpis dictum pharetra vel
            semper lacus. Nam commodo erat at imperdiet rhoncus. Donec dignissim
            ligula sit amet libero bibendum ullamcorper. Phasellus ut venenatis
            mi. Nam volutpat enim est, eu consequat massa elementum eu. Nulla
            sem nulla, imperdiet dictum semper quis, scelerisque id nulla.
            Suspendisse sit amet tortor eget nibh faucibus blandit. Pellentesque
            auctor sagittis neque, sit amet mattis nulla. Curabitur fringilla
            eleifend pulvinar.
          </p>

          <p>
            Nunc ac vehicula purus. Duis gravida ultrices est nec mattis. Nullam
            volutpat vel libero a facilisis. Nulla lacinia mauris ac urna
            sodales, eget interdum tellus ultrices. Duis cursus imperdiet
            faucibus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Integer laoreet sodales metus ut
            venenatis. Praesent efficitur leo sed aliquam elementum. Aliquam
            consequat nunc vitae elit efficitur, sit amet dignissim libero
            venenatis. Ut at metus metus. Proin sit amet lorem odio. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Suspendisse
            blandit faucibus metus sit amet faucibus. Integer viverra rhoncus
            mauris vitae laoreet. Aliquam erat volutpat.
          </p>

          <p>
            Suspendisse et maximus est. Etiam rutrum, odio id imperdiet finibus,
            magna ligula rhoncus nibh, non cursus neque nibh in ante. Nullam ac
            lectus lectus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Cras non molestie augue.
            Mauris iaculis iaculis ultrices. Ut a consequat turpis. Nullam
            condimentum nec urna suscipit malesuada. Proin quis diam sed purus
            eleifend varius posuere vel lorem. Vestibulum lacinia condimentum
            turpis, a pellentesque nisi tempus condimentum. Proin in auctor leo.
            Proin auctor libero eget lectus convallis, vel pulvinar diam
            consequat.
          </p>

          <p>
            Vivamus fringilla tincidunt eros efficitur rhoncus. Cras dictum, est
            eget maximus bibendum, nunc justo rutrum nisi, ut bibendum ipsum
            tortor ac justo. Suspendisse lacus nibh, accumsan id massa quis,
            vehicula volutpat quam. Vivamus nec erat diam. Vivamus nec mollis
            augue, sit amet pretium urna. Nam neque libero, lacinia in malesuada
            non, pellentesque eu ex. Aenean at accumsan diam, molestie lacinia
            sapien. Suspendisse potenti. Suspendisse elementum euismod pulvinar.
            Donec a lobortis est, vitae pulvinar sem. In augue ante, rhoncus ut
            ultrices vitae, iaculis vel nunc. Ut ornare malesuada lectus,
            lacinia laoreet lacus eleifend id. Vivamus fringilla elementum odio,
            in finibus nulla posuere a. Duis tristique blandit faucibus. Aliquam
            imperdiet dolor vel nunc fermentum vehicula.
          </p>
        </div>
      </div>
      <VideoSection url={db.url} rows={db.rows}>
        <div className="bg-white p-10 shadow w-full max-w-xl mt-auto">
          <h1 className="text-4xl font-bold mb-5">Lorem ipsum dolor sit amet</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod scelerisque purus, ut porta elit volutpat porttitor.
          </p>
        </div>
      </VideoSection>
      <div className="bg-white py-20">
        <div className="max-w-3xl mx-auto text-lg flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod scelerisque purus, ut porta elit volutpat porttitor. Mauris
            porttitor nibh non nisi sollicitudin vulputate. Vivamus venenatis
            auctor elit, quis lobortis nulla. Praesent sagittis metus justo, in
            tristique sem mollis quis. Mauris vitae ex augue. Ut nulla neque,
            scelerisque at malesuada nec, pretium sit amet dolor. Nullam
            interdum mi mauris, quis vestibulum diam laoreet a. Sed ut orci
            dictum, hendrerit lectus porta, mattis nunc. Morbi eu felis
            suscipit, tristique massa sed, ultrices mi. In facilisis ultricies
            suscipit. Cras pretium ultricies porta.
          </p>

          <p>
            Duis semper felis felis, sit amet ultrices lectus lacinia non. In a
            lectus tempus, ullamcorper risus ac, fermentum ligula. Donec in dui
            at lectus tincidunt aliquam sit amet vel tellus. Nulla rutrum id
            velit ac bibendum. Donec vitae erat ut turpis dictum pharetra vel
            semper lacus. Nam commodo erat at imperdiet rhoncus. Donec dignissim
            ligula sit amet libero bibendum ullamcorper. Phasellus ut venenatis
            mi. Nam volutpat enim est, eu consequat massa elementum eu. Nulla
            sem nulla, imperdiet dictum semper quis, scelerisque id nulla.
            Suspendisse sit amet tortor eget nibh faucibus blandit. Pellentesque
            auctor sagittis neque, sit amet mattis nulla. Curabitur fringilla
            eleifend pulvinar.
          </p>

          <p>
            Nunc ac vehicula purus. Duis gravida ultrices est nec mattis. Nullam
            volutpat vel libero a facilisis. Nulla lacinia mauris ac urna
            sodales, eget interdum tellus ultrices. Duis cursus imperdiet
            faucibus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Integer laoreet sodales metus ut
            venenatis. Praesent efficitur leo sed aliquam elementum. Aliquam
            consequat nunc vitae elit efficitur, sit amet dignissim libero
            venenatis. Ut at metus metus. Proin sit amet lorem odio. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Suspendisse
            blandit faucibus metus sit amet faucibus. Integer viverra rhoncus
            mauris vitae laoreet. Aliquam erat volutpat.
          </p>

          <p>
            Suspendisse et maximus est. Etiam rutrum, odio id imperdiet finibus,
            magna ligula rhoncus nibh, non cursus neque nibh in ante. Nullam ac
            lectus lectus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Cras non molestie augue.
            Mauris iaculis iaculis ultrices. Ut a consequat turpis. Nullam
            condimentum nec urna suscipit malesuada. Proin quis diam sed purus
            eleifend varius posuere vel lorem. Vestibulum lacinia condimentum
            turpis, a pellentesque nisi tempus condimentum. Proin in auctor leo.
            Proin auctor libero eget lectus convallis, vel pulvinar diam
            consequat.
          </p>

          <p>
            Vivamus fringilla tincidunt eros efficitur rhoncus. Cras dictum, est
            eget maximus bibendum, nunc justo rutrum nisi, ut bibendum ipsum
            tortor ac justo. Suspendisse lacus nibh, accumsan id massa quis,
            vehicula volutpat quam. Vivamus nec erat diam. Vivamus nec mollis
            augue, sit amet pretium urna. Nam neque libero, lacinia in malesuada
            non, pellentesque eu ex. Aenean at accumsan diam, molestie lacinia
            sapien. Suspendisse potenti. Suspendisse elementum euismod pulvinar.
            Donec a lobortis est, vitae pulvinar sem. In augue ante, rhoncus ut
            ultrices vitae, iaculis vel nunc. Ut ornare malesuada lectus,
            lacinia laoreet lacus eleifend id. Vivamus fringilla elementum odio,
            in finibus nulla posuere a. Duis tristique blandit faucibus. Aliquam
            imperdiet dolor vel nunc fermentum vehicula.
          </p>
        </div>
      </div>
      <VideoSection url={db.url} rows={db.rows}>
        <div className="bg-white p-10 shadow w-full max-w-xl mt-auto">
          <h1 className="text-4xl font-bold mb-5">Lorem ipsum dolor sit amet</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod scelerisque purus, ut porta elit volutpat porttitor.
          </p>
        </div>
      </VideoSection>
      <div className="bg-white py-20">
        <div className="max-w-3xl mx-auto text-lg flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod scelerisque purus, ut porta elit volutpat porttitor. Mauris
            porttitor nibh non nisi sollicitudin vulputate. Vivamus venenatis
            auctor elit, quis lobortis nulla. Praesent sagittis metus justo, in
            tristique sem mollis quis. Mauris vitae ex augue. Ut nulla neque,
            scelerisque at malesuada nec, pretium sit amet dolor. Nullam
            interdum mi mauris, quis vestibulum diam laoreet a. Sed ut orci
            dictum, hendrerit lectus porta, mattis nunc. Morbi eu felis
            suscipit, tristique massa sed, ultrices mi. In facilisis ultricies
            suscipit. Cras pretium ultricies porta.
          </p>

          <p>
            Duis semper felis felis, sit amet ultrices lectus lacinia non. In a
            lectus tempus, ullamcorper risus ac, fermentum ligula. Donec in dui
            at lectus tincidunt aliquam sit amet vel tellus. Nulla rutrum id
            velit ac bibendum. Donec vitae erat ut turpis dictum pharetra vel
            semper lacus. Nam commodo erat at imperdiet rhoncus. Donec dignissim
            ligula sit amet libero bibendum ullamcorper. Phasellus ut venenatis
            mi. Nam volutpat enim est, eu consequat massa elementum eu. Nulla
            sem nulla, imperdiet dictum semper quis, scelerisque id nulla.
            Suspendisse sit amet tortor eget nibh faucibus blandit. Pellentesque
            auctor sagittis neque, sit amet mattis nulla. Curabitur fringilla
            eleifend pulvinar.
          </p>

          <p>
            Nunc ac vehicula purus. Duis gravida ultrices est nec mattis. Nullam
            volutpat vel libero a facilisis. Nulla lacinia mauris ac urna
            sodales, eget interdum tellus ultrices. Duis cursus imperdiet
            faucibus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Integer laoreet sodales metus ut
            venenatis. Praesent efficitur leo sed aliquam elementum. Aliquam
            consequat nunc vitae elit efficitur, sit amet dignissim libero
            venenatis. Ut at metus metus. Proin sit amet lorem odio. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Suspendisse
            blandit faucibus metus sit amet faucibus. Integer viverra rhoncus
            mauris vitae laoreet. Aliquam erat volutpat.
          </p>

          <p>
            Suspendisse et maximus est. Etiam rutrum, odio id imperdiet finibus,
            magna ligula rhoncus nibh, non cursus neque nibh in ante. Nullam ac
            lectus lectus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Cras non molestie augue.
            Mauris iaculis iaculis ultrices. Ut a consequat turpis. Nullam
            condimentum nec urna suscipit malesuada. Proin quis diam sed purus
            eleifend varius posuere vel lorem. Vestibulum lacinia condimentum
            turpis, a pellentesque nisi tempus condimentum. Proin in auctor leo.
            Proin auctor libero eget lectus convallis, vel pulvinar diam
            consequat.
          </p>

          <p>
            Vivamus fringilla tincidunt eros efficitur rhoncus. Cras dictum, est
            eget maximus bibendum, nunc justo rutrum nisi, ut bibendum ipsum
            tortor ac justo. Suspendisse lacus nibh, accumsan id massa quis,
            vehicula volutpat quam. Vivamus nec erat diam. Vivamus nec mollis
            augue, sit amet pretium urna. Nam neque libero, lacinia in malesuada
            non, pellentesque eu ex. Aenean at accumsan diam, molestie lacinia
            sapien. Suspendisse potenti. Suspendisse elementum euismod pulvinar.
            Donec a lobortis est, vitae pulvinar sem. In augue ante, rhoncus ut
            ultrices vitae, iaculis vel nunc. Ut ornare malesuada lectus,
            lacinia laoreet lacus eleifend id. Vivamus fringilla elementum odio,
            in finibus nulla posuere a. Duis tristique blandit faucibus. Aliquam
            imperdiet dolor vel nunc fermentum vehicula.
          </p>
        </div>
      </div>
      <VideoSection url={db.url} rows={db.rows}>
        <div className="bg-white p-10 shadow w-full max-w-xl mt-auto">
          <h1 className="text-4xl font-bold mb-5">Lorem ipsum dolor sit amet</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod scelerisque purus, ut porta elit volutpat porttitor.
          </p>
        </div>
      </VideoSection>
      <div className="bg-white py-20">
        <div className="max-w-3xl mx-auto text-lg flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod scelerisque purus, ut porta elit volutpat porttitor. Mauris
            porttitor nibh non nisi sollicitudin vulputate. Vivamus venenatis
            auctor elit, quis lobortis nulla. Praesent sagittis metus justo, in
            tristique sem mollis quis. Mauris vitae ex augue. Ut nulla neque,
            scelerisque at malesuada nec, pretium sit amet dolor. Nullam
            interdum mi mauris, quis vestibulum diam laoreet a. Sed ut orci
            dictum, hendrerit lectus porta, mattis nunc. Morbi eu felis
            suscipit, tristique massa sed, ultrices mi. In facilisis ultricies
            suscipit. Cras pretium ultricies porta.
          </p>

          <p>
            Duis semper felis felis, sit amet ultrices lectus lacinia non. In a
            lectus tempus, ullamcorper risus ac, fermentum ligula. Donec in dui
            at lectus tincidunt aliquam sit amet vel tellus. Nulla rutrum id
            velit ac bibendum. Donec vitae erat ut turpis dictum pharetra vel
            semper lacus. Nam commodo erat at imperdiet rhoncus. Donec dignissim
            ligula sit amet libero bibendum ullamcorper. Phasellus ut venenatis
            mi. Nam volutpat enim est, eu consequat massa elementum eu. Nulla
            sem nulla, imperdiet dictum semper quis, scelerisque id nulla.
            Suspendisse sit amet tortor eget nibh faucibus blandit. Pellentesque
            auctor sagittis neque, sit amet mattis nulla. Curabitur fringilla
            eleifend pulvinar.
          </p>

          <p>
            Nunc ac vehicula purus. Duis gravida ultrices est nec mattis. Nullam
            volutpat vel libero a facilisis. Nulla lacinia mauris ac urna
            sodales, eget interdum tellus ultrices. Duis cursus imperdiet
            faucibus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Integer laoreet sodales metus ut
            venenatis. Praesent efficitur leo sed aliquam elementum. Aliquam
            consequat nunc vitae elit efficitur, sit amet dignissim libero
            venenatis. Ut at metus metus. Proin sit amet lorem odio. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Suspendisse
            blandit faucibus metus sit amet faucibus. Integer viverra rhoncus
            mauris vitae laoreet. Aliquam erat volutpat.
          </p>

          <p>
            Suspendisse et maximus est. Etiam rutrum, odio id imperdiet finibus,
            magna ligula rhoncus nibh, non cursus neque nibh in ante. Nullam ac
            lectus lectus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Cras non molestie augue.
            Mauris iaculis iaculis ultrices. Ut a consequat turpis. Nullam
            condimentum nec urna suscipit malesuada. Proin quis diam sed purus
            eleifend varius posuere vel lorem. Vestibulum lacinia condimentum
            turpis, a pellentesque nisi tempus condimentum. Proin in auctor leo.
            Proin auctor libero eget lectus convallis, vel pulvinar diam
            consequat.
          </p>

          <p>
            Vivamus fringilla tincidunt eros efficitur rhoncus. Cras dictum, est
            eget maximus bibendum, nunc justo rutrum nisi, ut bibendum ipsum
            tortor ac justo. Suspendisse lacus nibh, accumsan id massa quis,
            vehicula volutpat quam. Vivamus nec erat diam. Vivamus nec mollis
            augue, sit amet pretium urna. Nam neque libero, lacinia in malesuada
            non, pellentesque eu ex. Aenean at accumsan diam, molestie lacinia
            sapien. Suspendisse potenti. Suspendisse elementum euismod pulvinar.
            Donec a lobortis est, vitae pulvinar sem. In augue ante, rhoncus ut
            ultrices vitae, iaculis vel nunc. Ut ornare malesuada lectus,
            lacinia laoreet lacus eleifend id. Vivamus fringilla elementum odio,
            in finibus nulla posuere a. Duis tristique blandit faucibus. Aliquam
            imperdiet dolor vel nunc fermentum vehicula.
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
