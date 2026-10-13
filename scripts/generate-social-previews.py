"""Regenerate committed social PNGs. Requires Python, Pillow and DejaVu fonts.
Run from the repository root: python scripts/generate-social-previews.py
The website serves the committed files; this script is not a build dependency.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import os
ROOT = Path(__file__).resolve().parents[1]
FONT = Path(os.environ.get('SOCIAL_FONT_DIR', '/usr/share/fonts/truetype/dejavu'))
def font(size, bold=False, serif=False):
    name = 'DejaVuSerif.ttf' if serif else ('DejaVuSans-Bold.ttf' if bold else 'DejaVuSans.ttf')
    return ImageFont.truetype(str(FONT / name), size)
CARDS = {
    'home': [('DADOS · GIS · SOFTWARE', 'Dados em decisões.\nIdeias em soluções.', 'Tecnologia aplicada ao seu contexto.'), ('DATA · GIS · SOFTWARE', 'Data into decisions.\nIdeas into solutions.', 'Technology built around your context.')],
    'portfolio': [('PORTFÓLIO', 'Código que resolve.\nDados que orientam.', 'Ferramentas, demonstrações e estudos de caso.'), ('PORTFOLIO', 'Code that solves.\nData that guides.', 'Tools, demonstrations and case studies.')],
    'about': [('SOBRE A NEXOVIBE', 'Tecnologia que\nliga as peças.', 'Dados, território e soluções digitais.\nCom origem em Moçambique.'), ('ABOUT NEXOVIBE', 'Technology that\nconnects the dots.', 'Data, territory and digital solutions.\nRooted in Mozambique.')],
    'invitations': [('NEXOVIBE CONVITES', 'A tua história.\nO teu convite.', 'Imagem · PDF · Experiências digitais'), ('NEXOVIBE INVITATIONS', 'Your story.\nYour invitation.', 'Image · PDF · Digital experiences')],
    'report': [('SEGURANÇA DE IA · WEB · DADOS', 'Riscos claros.\nAcções concretas.', 'Relatório demonstrativo · Exemplo fictício'), ('AI · WEB · DATA SECURITY', 'Clear risks.\nPractical actions.', 'Sample report · Fictional example')],
    'gpx-batch-converter': [('ESTUDO DE CASO · QGIS', 'GPX Batch\nConverter', 'Dos ficheiros GPS às camadas de análise.'), ('CASE STUDY · QGIS', 'GPX Batch\nConverter', 'From GPS files to analysis-ready layers.')],
    'geoclick-capture': [('ESTUDO DE CASO · QGIS', 'GeoClick\nCapture', 'Localizações com contexto e evidências.'), ('CASE STUDY · QGIS', 'GeoClick\nCapture', 'Locations with context and evidence.')],
    'xlsform-translator': [('ESTUDO DE CASO · EXCEL', 'XLSForm AI\nTranslator', 'Traduzir questionários. Preservar a estrutura.'), ('CASE STUDY · EXCEL', 'XLSForm AI\nTranslator', 'Translate questionnaires. Preserve structure.')],
    'training': [('FORMAÇÃO & COMUNIDADE', 'Aprender, construir\ne partilhar.', 'Plugins QGIS · Recursos técnicos'), ('TRAINING & COMMUNITY', 'Learn, build\nand share.', 'QGIS plugins · Technical resources')],
}
def card(slug, text, language):
    warm = slug == 'invitations'
    bg = '#151518' if warm else '#0a0e11'
    accent = '#e4c69b' if warm else '#8be6c8'
    muted = '#b7b2a9' if warm else '#a0afb7'
    im = Image.new('RGB', (1200,630),bg);d=ImageDraw.Draw(im)
    # Quiet connecting lines unify the technical cards; invitations use a paper motif.
    if warm:
        d.rounded_rectangle((889,95,1132,502),18,fill='#262326',outline='#665747',width=2)
        d.rounded_rectangle((910,116,1111,481),10,outline='#927957',width=1)
        d.ellipse((979,213,1042,276),outline=accent,width=2)
        d.line((945,326,1076,326),fill=accent,width=2)
        d.line((964,352,1057,352),fill='#927957',width=1)
    else:
        for y in range(121,502,38): d.line((902,y,1132,y),fill='#19292c',width=1)
        for x in range(904,1133,38): d.line((x,121,x,502),fill='#19292c',width=1)
        nodes=[(939,396),(1079,304),(974,184),(1116,153)]
        d.line(nodes,fill='#41665e',width=3)
        for i,(x,y) in enumerate(nodes):
            d.ellipse((x-12,y-12,x+12,y+12),fill=bg,outline=accent,width=3)
            d.ellipse((x-3,y-3,x+3,y+3),fill=accent)
    # Brand mark and generous safe area remain readable in small social cards.
    d.rounded_rectangle((64,54,110,100),8,outline=accent,width=2)
    d.text((75,60),'N',font=font(27,True),fill=accent)
    d.text((125,54),'NexoVibe',font=font(32,True),fill='#f0f3f3')
    d.text((66,151),text[0],font=font(19,True),fill=accent)
    size=60 if slug=='xlsform-translator' else 64
    headingfont=font(size,True,serif=warm)
    for line in text[1].split('\n'):
        assert d.textlength(line,font=headingfont)<815, (slug,line)
    d.multiline_text((60,220),text[1],font=headingfont,fill='#f0f3f3',spacing=9)
    d.multiline_text((66,405),text[2],font=font(23),fill=muted,spacing=10)
    d.line((64,536,1136,536),fill='#3d4141',width=1)
    d.text((66,565),'nexovibe.netlify.app',font=font(19),fill=muted)
    d.text((1088,557),'↗',font=font(36),fill=accent)
    out=ROOT/'public/social'/language;out.mkdir(parents=True,exist_ok=True)
    im.save(out/(slug+'.png'),optimize=True)
    return im
thumbs=[]
for slug,variants in CARDS.items():
    for i,words in enumerate(variants):
        im=card(slug,words,'pt' if i==0 else 'en')
        if i==0 and slug in ['home','portfolio','about','invitations']: thumbs.append(im.resize((600,315)))
sheet=Image.new('RGB',(1200,630),'#0a0e11')
for i,im in enumerate(thumbs): sheet.paste(im,((i%2)*600,(i//2)*315))
(ROOT/'docs').mkdir(exist_ok=True)
sheet.save(ROOT/'docs/social-previews.jpg',quality=90)
print('Generated 18 social PNGs and a four-card preview sheet.')
