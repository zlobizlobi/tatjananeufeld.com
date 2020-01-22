import React from "react"
import { Heading} from "@components"
import { FormattedMessage } from "react-intl";
import { Text, Section, FirstImage } from './styles';
import image from '../../images/image.jpg'
export const BiographySection = () => (
  <Section name="biography">
    <Heading>
      <FormattedMessage id="biography_heading" />
    </Heading>
    <div>
      <FirstImage src={image} />
    <Text>
    <span style={{fontWeight: 900}}>Tatjana Neufeld</span> ist erste Preisträgerin des Internationalen Klavierwettbewerbs 

'Piano Open' und des  Internationalen Grotrian - Steinweg Wettbewerbs. Sie besuchte Meisterkurse bei Prof. V. Krainev, W. G. Nabore, K. H. Kämmerling,           R. Kretschmar-Fischer, W. Mainz, Igor Shukow, R. Becker & Prof. George Sava.


Neufeld studierte seit 1998 gemeinsam mit Rebekka Markowski am C. Ph.E. - Bach  Gymnasium Berlin wo sie mit ihr gemeinsam u.a. in den Konzertreihen   "The Next Generation" und "Junge Stars aus Berlin"konzertierten. 
Gleichzeitig war  Tatjana Jungstudentin und später Studentin  an der Universität der Künste in Berlin von 2001 bis 2007 in der Klavierklasse von Prof. Elena Lapitskaja.

Als Liedbegleiter und Klavierpartner sammelte sie ihre Erfahrung in den Jahren von 2008 -2011 im Kammermusik Studium an der in HmT "Felix Mendelssohn Bartholdy" in Leipzig bei Prof. G.Franke , Prof. H. Bräunlich & Prof. Phillip Moll.   Es folgten eine große Zusammenarbeit mit der Sängerin der Gesangsklasse von Prof. Berthold Schmid.

MIt Andreas Neufeld begann Tatjana seit 2000 zusammen zu spielen u.a. beim 11. Bach Festival in Twerj ( Russland ), auf den "Salzburger Osterfestspielen" und  den Konzertreihen der Berliner Philharmoniker. Im Jahr 2013 spielte sie an der Premiere der Kammerkonzerten "Klassik im Kessel" RSB - Das Kesselhaus in der Kulturbrauerei Berlin mit Volker Wieprecht als Moderator.  

Im Jahre 2017 gründete Sie mit dem Geiger Jeroen Dupont das “Klassiek - Duo” in Amsterdam. Im selben Jahr entstand das “Klaviertrio Berlin” mit  Rebekka Mar- kowski und Andreas Neufeld in Berlin.                                                                    Seit  Juni 2019 Korrepetitor an der Kreismusikschule Gifhorn.
    </Text>
    </div>
  </Section>
)
