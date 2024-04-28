import Image from 'next/image'
import Link from 'next/link'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const projects = [
  {
    id: 1,
    name: 'wildwood',
    href: '/181114-wildWood#',
    Date: '11-2018',
    imageSrc: '/thumbnail/20_wildwood_thumb_zimarc.png',
    imageAlt: 'detached Accessory Dwelling Unit (ADU) structures architecture by zimarc ',
  },
  {
    id: 2,
    name: 'tree',
    href: '/180403-tree#',
    Date: 'April 2018',
    imageSrc: '/thumbnail/19_tree_thumb_zimarc.png',
    imageAlt: 'tree stand structures architecture by zimarc ',
  },
  {
    id: 3,
    name: 'aurora',
    href: '/170906-auroraLa#',
    Date: 'xyz',
    imageSrc: '/thumbnail/18_auroraLa_thumb_zimarc.png',
    imageAlt: ' interactive lobby experience structures design computation by zimarc ',
  },
  {
    id: 1,
    name: 'LED Sphere',
    href: '/170901-ledSphere#',
    Date: 'xyz',
    imageSrc: '/thumbnail/17_ledSphere_thumb_zimarc.png',
    imageAlt: 'LED Shere design concept architecture by zimarc ',
  },
  {
    id: 1,
    name: 'voronofee',
    href: '/170323-voronofee#',
    Date: 'xyz',
    imageSrc: '/thumbnail/16_voronofee_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 15,
    name: 'curvy',
    href: '/170128-curvy#',
    Date: 'xyz',
    imageSrc: '/thumbnail/15_curvy_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 14,
    name: 'arch',
    href: '/160920-arch#',
    Date: 'xyz',
    imageSrc: '/thumbnail/14_arch_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 13,
    name: 'nest ArtDisCo',
    href: '/160616-nestArtDisCo#',
    Date: 'xyz',
    imageSrc: '/thumbnail/13_nestArtDisCo_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 12,
    name: 'flower UniqueLa',
    href: '/160510-flowerUniqueLa#',
    Date: 'xyz',
    imageSrc: '/thumbnail/12_flowerUniqueLa_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 11,
    name: 'media Wall',
    href: '/160204-mediaWall#',
    Date: 'xyz',
    imageSrc: '/thumbnail/11_mediaWall_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 10,
    name: 'ManiFold',
    href: '/150803-maniFold#',
    Date: 'xyz',
    imageSrc: '/thumbnail/10_ManiFold_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 9,
    name: 'Beautiful Incompletion',
    href: '/140515-beautifulIncompletion#',
    Date: 'xyz',
    imageSrc: '/thumbnail/09_beautifulIncompletion_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 8,
    name: 'RoboFab',
    href: '/111210-roboFab#',
    Date: 'xyz',
    imageSrc: '/thumbnail/08_roboFab_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 7,
    name: 'cyclone',
    href: '/101209-cyclone#',
    Date: 'xyz',
    imageSrc: '/thumbnail/07_cyclone_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 6,
    name: 'soulmate',
    href: '/100211-soulmate#',
    Date: 'xyz',
    imageSrc: '/thumbnail/06_soulmate_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 5,
    name: 'iso',
    href: '/100202_iso#',
    Date: 'xyz',
    imageSrc: '/thumbnail/05_iso_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 4,
    name: 'rhythm',
    href: '/090308_rhythm#',
    Date: 'xyz',
    imageSrc: '/thumbnail/04_rhythm_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 3,
    name: 'paper Folding',
    href: '/081010-paperFolding#',
    Date: 'xyz',
    imageSrc: '/thumbnail/03_paperFolding_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 2,
    name: 'fine Art Fair Sf',
    href: '/071203-fineArtFairSf#',
    Date: 'xyz',
    imageSrc: '/thumbnail/02_fineArtFairSf_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  {
    id: 2,
    name: 'membrance',
    href: '/071009-membrane#',
    Date: 'xyz',
    imageSrc: '/thumbnail/01_membrance_thumb_zimarc.png',
    imageAlt: 'tensile membrane structures architecture by zimarc ',
  },
  // More products...
]



export default function Home() {
  return (
    <div>
      <section>
        <div className="background-animation">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {projects.map((product) => (
                <a key={product.id} href={product.href} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                    <h3 className="text-white text-lg font-bold text-center uppercase">{product.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
