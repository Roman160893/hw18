import PostAuthor from './Components/PostAuthor';

const ANAKIN_IMAGE = "https://th.bing.com/th/id/OIP.TH7fogUqTP5ohYBDhgGtbgAAAA?pid=ImgDet&w=300&h=412&rs=1";


export function App() {
  return (
    <div>
      <PostAuthor author={{
        name: 'Roman Demchuk',
        photo: ANAKIN_IMAGE,
        nickname: '@R.Dem',
      }}
        content="Україна переможе!!!"
        image='https://ivankiv-gromada.gov.ua/attachments/45a38cff-fed6-4b68-94cb-6ac3b4b3a545_victory%20scroll.jpg'
        data='13 липня 16:25' />

      <PostAuthor author={{
        name: 'Roman Demchuk',
        photo: ANAKIN_IMAGE,
        nickname: '@R.Dem',
      }}
        content=""
        image='https://scontent.flwo3-1.fna.fbcdn.net/v/t39.30808-6/293857119_751967006256853_8069189037009844979_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=LTmsxSq2tgIAX_bjQJN&_nc_ht=scontent.flwo3-1.fna&oh=00_AT_PtEiPiSoWnrvx-ULK93GVCsXE4W89Wc8igdMOA1kHzg&oe=62D6CD6C'
        data='14 липня 09:15' />

      <PostAuthor author={{
        name: 'Roman Demchuk',
        photo: ANAKIN_IMAGE,
        nickname: '@R.Dem',
      }}
        content="Господи, почуй благання нашi, за Украïну нашу! 🙏 Заступи, спаси, помилуй i охорони нас Боже, твоєю Благадаттю!🙏"
        image='https://scontent.flwo3-1.fna.fbcdn.net/v/t39.30808-6/292870393_723008488993380_7242662139061307221_n.jpg?stp=dst-jpg_s640x640&_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=1tBkjqQBUg0AX-7NkR4&tn=o6XmrOz6GqbTfeYH&_nc_ht=scontent.flwo3-1.fna&oh=00_AT_Ov3gPlM-olwNC9jBOfolT0lXmFk1VMGglN_btZEWAng&oe=62D611D1'
        data='14 липня 09:48' />
    </div>
  )
}