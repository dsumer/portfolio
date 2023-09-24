/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';
import { ARTICLES } from '../../consts/articles';
import { websiteUrl } from '../../consts/common';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    if (!searchParams.has('slug')) {
      return new Response(`Slug is missing.`, {
        status: 400,
      });
    }

    const slug = searchParams.get('slug')!;
    const article = ARTICLES[slug];

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            padding: '30px',
            gap: '50px',
          }}
        >
          <div
            style={{
              height: 'auto',
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'row',
              gap: '55px',
            }}
          >
            <img
              alt="Vercel"
              height={350}
              width={350}
              src={`${websiteUrl}/images/blog/${slug}/thumbnail.jpg`}
              style={{ borderRadius: '15px', boxShadow: '0 2px 10px 2px rgba(0,0,0,0.3)' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 1,
                maxHeight: '350px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  fontSize: 50,
                  fontStyle: 'normal',
                  letterSpacing: '-0.025em',
                  fontFamily: 'Roboto',
                  color: 'black',
                  lineHeight: 1.15,
                  whiteSpace: 'pre-wrap',
                  flexShrink: 0,
                }}
              >
                {article.title}
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontStyle: 'normal',
                  letterSpacing: '-0.025em',
                  fontFamily: 'Roboto',
                  lineHeight: 1.2,
                  whiteSpace: 'pre-wrap',
                  marginTop: '30px',
                  color: '#535353',
                  flexShrink: 0,
                }}
              >
                {article.description}
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: 'auto',
              width: '100%',
              gap: '30px',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 30,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginBottom: '10px',
              }}
            >
              <div style={{ display: 'flex', color: '#a2a2a2' }}>dominiksumer.com/blog/</div>
              <div style={{ display: 'flex' }}>{slug}</div>
            </div>
            <img
              width={180}
              height={180}
              src={`${websiteUrl}/images/avatar.png`}
              style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.14))' }}
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.error(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
